import { Injectable, Inject } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Md5 } from 'md5-typescript';
import { Auth, JwtPayload } from 'src/auth/interfaces';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository') private readonly usersRepository: typeof User,
  ) { }

  async findAll() {
    return await this.usersRepository.findAll();
  }

  async create(user: User) {
    user.password = Md5.init(user.password);
    return await this.usersRepository.create(user);
  }

  async findById(id: number) {
    return await this.usersRepository.findById(id);
  }

  async update(id: number, user: User) {
    await this.usersRepository.update({ ...user }, { where: { id } });
    return await this.usersRepository.findById(id);
  }

  async delete(id: number) {
    return await this.usersRepository.destroy({ where: { id } });
  }

  async findOneByUsuario(usuario: string) {
    return await this.usersRepository.findOne({ where: { usuario } });
  }

  async login(auth: Auth): Promise<JwtPayload> {
    const user = await this.usersRepository.findOne({
      where: {
        usuario: auth.usuario,
        password: Md5.init(auth.password),
      },
      attributes: ['usuario', 'rol'],
    });
    const data: JwtPayload = {
      usuario: user.usuario,
      email: user.email,
      scope: user.rol,
    };
    return data;
  }
}
