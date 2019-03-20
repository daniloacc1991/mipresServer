import { Injectable, Inject } from '@nestjs/common';
import { Presentacion } from '../entities/presentacion.entity';
import { Sequelize } from 'sequelize-typescript';
import { PresentacionGateway } from '../gateway/presentacion.gateway';

@Injectable()
export class PresentacionService {

  constructor(
    @Inject('PresentacionRepository') private readonly presentacionRepository: typeof Presentacion,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private presentacionGateway: PresentacionGateway,
  ) {}

  async findAll() {
    return await this.presentacionRepository.findAll();
  }

  async findById(id) {
    return await this.presentacionRepository.findByPk(id);
  }

  async create(presentacion: Presentacion) {
    const t = await this.seq.transaction();
    try {
      const element = await this.presentacionRepository.create(presentacion, { transaction: t });
      t.commit();
      this.presentacionGateway.presentacionCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, presentacion: Presentacion) {
    const t = await this.seq.transaction();
    try {
      delete presentacion.id;
      const res = await this.presentacionRepository.update({ ...presentacion }, { where: { id } });
      t.commit();
      const element = await this.presentacionRepository.findById(res[0]);
      this.presentacionGateway.presentacionUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      await this.presentacionRepository.destroy({ where: { id } });
      t.commit();
      this.presentacionGateway.presentacionDeleted(id);
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
