import { Injectable, Inject, Logger } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';
import { User } from '../entities/user.entity';
import { Md5 } from 'md5-typescript';
import { Auth, JwtPayload } from '../interfaces';
import { Sequelize } from 'sequelize-typescript';
import { UsersGateway } from '../gateway/users.gateway';
import * as randomize from 'randomatic';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository') private readonly usersRepository: typeof User,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private usersGateway: UsersGateway,
    private readonly mailerService: MailerService,
  ) { }

  async findAll() {
    return await this.usersRepository.findAll();
  }

  async findById(id: number) {
    return await this.usersRepository.findByPk(id);
  }

  async create(user: User) {
    const password = randomize('Aa0!', 10);
    user.password = Md5.init(password);
    const t = await this.seq.transaction();
    try {
      const element = await this.usersRepository.create(user, { transaction: t });
      const mail = await this.mailerService.sendMail({
        to: user.email,
        subject: 'Creación de Usuario Mipres SanLuis ✔',
        template: 'welcome',
        context: {
          username: user.name,
          user: user.usuario,
          password,
        },
      });
      t.commit();
      this.usersGateway.usersCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      Logger.error(e);
      throw e;
    }
  }

  async update(id: number, user: User) {
    const t = await this.seq.transaction();
    try {
      delete user.id;
      await this.usersRepository.update({ ...user }, { where: { id } });
      t.commit();
      const element = await this.usersRepository.findByPk(id);
      this.usersGateway.usersUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async changePassword(user: any, password: string) {
    const newPassword = Md5.init(password);
    const t = await this.seq.transaction();
    try {
      await this.usersRepository.update({ password: newPassword }, { where: { usuario: user.usuario } });
      t.commit();
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      await this.usersRepository.destroy({ where: { id } });
      t.commit();
      this.usersGateway.usersDeleted(id);
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async findOneByUsuario(usuario: string) {
    return await this.usersRepository.findOne({ where: { usuario } });
  }

  async login(auth: Auth): Promise<JwtPayload> {
    try {
      const user = await this.usersRepository.findOne({
        where: {
          usuario: auth.usuario,
          password: Md5.init(auth.password),
        },
        attributes: ['usuario', 'rol', 'name', 'email'],
      });
      if (user) {
        const data: JwtPayload = {
          usuario: user.usuario,
          nombre: user.name,
          email: user.email,
          scope: user.rol,
        };
        return data;
      }
      return;
    } catch (e) {
      throw (e);
    }
  }
}
