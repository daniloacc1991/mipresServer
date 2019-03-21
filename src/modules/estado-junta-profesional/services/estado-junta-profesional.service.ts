import { Injectable, Inject } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { EstadoJuntaProfesional } from '../entities/estado-junta-profesional.entity';
import { EstadoJuntaProfesionalGateway } from '../gateway/estado-junta-profesional.gateway';
import { PrescripcionDetalle } from 'src/modules/prescripcion-detalle/entities/prescripcion-detalle.entity';

@Injectable()
export class EstadoJuntaProfesionalService {

  constructor(
    @Inject('EstadoJuntaProfesionalRepository') private readonly estadoJuntaProfesionalRepository: typeof EstadoJuntaProfesional,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private estadoJuntaProfesionalGateway: EstadoJuntaProfesionalGateway,
  ) { }

  async findAll() {
    return await this.estadoJuntaProfesionalRepository.findAll();
  }

  async findById(id) {
    return await this.estadoJuntaProfesionalRepository.findById(id, {
      include: [PrescripcionDetalle],
    });
  }

  async create(estadoJuntaProfesional: EstadoJuntaProfesional) {
    const t = await this.seq.transaction();
    try {
      const element = await this.estadoJuntaProfesionalRepository.create(estadoJuntaProfesional, { transaction: t });
      t.commit();
      this.estadoJuntaProfesionalGateway.estadoJuntaProfesionalCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, estadoJuntaProfesional: EstadoJuntaProfesional) {
    const t = await this.seq.transaction();
    try {
      await this.estadoJuntaProfesionalRepository.update({ ...estadoJuntaProfesional }, { where: { id } });
      t.commit();
      const element = await this.estadoJuntaProfesionalRepository.findById(id);
      this.estadoJuntaProfesionalGateway.estadoJuntaProfesionalUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      await this.estadoJuntaProfesionalRepository.destroy({ where: { id } });
      t.commit();
      this.estadoJuntaProfesionalGateway.estadoJuntaProfesionalDeleted(id);
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

}
