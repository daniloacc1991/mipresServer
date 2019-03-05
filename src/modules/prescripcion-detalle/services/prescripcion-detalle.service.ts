import { Injectable, Inject } from '@nestjs/common';
import { PrescripcionDetalle } from '../entities/prescripcion-detalle.entity';
import { Sequelize } from 'sequelize-typescript';
import { PrescripcionDetalleGateway } from '../gateway/prescripcion-detalle.gateway';

@Injectable()
export class PrescripcionDetalleService {

  constructor(
    @Inject('PrescripcionDetalleRepository') private readonly prescripcionDetalleRepository: typeof PrescripcionDetalle,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private prescripcionDetalleGateway: PrescripcionDetalleGateway,
  ) {}

  async findAll() {
    return await this.prescripcionDetalleRepository.findAll();
  }

  async findById(id) {
    return await this.prescripcionDetalleRepository.findById(id);
  }

  async create(prescripcionDetalle: PrescripcionDetalle) {
    const t = await this.seq.transaction();
    try {
      const element = await this.prescripcionDetalleRepository.create(prescripcionDetalle, { transaction: t });
      t.commit();
      this.prescripcionDetalleGateway.prescripcionDetalleCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, prescripcionDetalle: PrescripcionDetalle) {
    const t = await this.seq.transaction();
    try {
      delete prescripcionDetalle.id;
      const res = await this.prescripcionDetalleRepository.update({ ...prescripcionDetalle }, { where: { id } });
      t.commit();
      const element = await this.prescripcionDetalleRepository.findById(res[0]);
      this.prescripcionDetalleGateway.prescripcionDetalleUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      await this.prescripcionDetalleRepository.destroy({ where: { id } });
      t.commit();
      this.prescripcionDetalleGateway.prescripcionDetalleDeleted(id);
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}