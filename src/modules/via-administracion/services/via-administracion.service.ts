import { Injectable, Inject } from '@nestjs/common';
import { ViaAdministracion } from '../entities/via-administracion.entity';
import { Sequelize } from 'sequelize-typescript';
import { ViaAdministracionGateway } from '../gateway/via-administracion.gateway';

@Injectable()
export class ViaAdministracionService {

  constructor(
    @Inject('ViaAdministracionRepository') private readonly viaAdministracionRepository: typeof ViaAdministracion,
    @Inject('SequelizeRepository') private readonly seq: Sequelize,
    private viaAdministracionGateway: ViaAdministracionGateway,
  ) {}

  async findAll() {
    return await this.viaAdministracionRepository.findAll();
  }

  async findById(id) {
    return await this.viaAdministracionRepository.findById(id);
  }

  async create(viaAdministracion: ViaAdministracion) {
    const t = await this.seq.transaction();
    try {
      const element = await this.viaAdministracionRepository.create(viaAdministracion, { transaction: t });
      t.commit();
      this.viaAdministracionGateway.viaAdministracionCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, viaAdministracion: ViaAdministracion) {
    const t = await this.seq.transaction();
    try {
      delete viaAdministracion.id;
      const res = await this.viaAdministracionRepository.update({ ...viaAdministracion }, { where: { id } });
      t.commit();
      const element = await this.viaAdministracionRepository.findById(res[0]);
      this.viaAdministracionGateway.viaAdministracionUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      await this.viaAdministracionRepository.destroy({ where: { id } });
      t.commit();
      this.viaAdministracionGateway.viaAdministracionDeleted(id);
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
