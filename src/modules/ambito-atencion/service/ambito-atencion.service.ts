import { Injectable, Inject } from '@nestjs/common';
import { AmbitoAtencion } from '../entities/ambito-atencion.entity';
import { Sequelize } from 'sequelize-typescript';
import { AmbitoAtencionGateway } from '../gateway/ambito-atencion.gateway';

@Injectable()
export class AmbitoAtencionService {
  constructor(
    @Inject('AmbitoAtencionRepository') private readonly ambitoAtencionRepository: typeof AmbitoAtencion,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private ambitoAtencionGateway: AmbitoAtencionGateway,
  ) { }

  async findAll() {
    return await this.ambitoAtencionRepository.findAll();
  }

  async findById(id) {
    return await this.ambitoAtencionRepository.findById(id);
  }

  async create(ambitoAtencion: AmbitoAtencion) {
    const t = await this.seq.transaction();
    try {
      const element = await this.ambitoAtencionRepository.create(ambitoAtencion, { transaction: t });
      t.commit();
      this.ambitoAtencionGateway.ambitoAtencionCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, ambitoAtencion: AmbitoAtencion) {
    const t = await this.seq.transaction();
    try {
      delete ambitoAtencion.id;
      const res = await this.ambitoAtencionRepository.update({ ...ambitoAtencion }, { where: { id } });
      t.commit();
      const element = await this.ambitoAtencionRepository.findById(res[0]);
      this.ambitoAtencionGateway.ambitoAtencionUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      await this.ambitoAtencionRepository.destroy({ where: { id } });
      t.commit();
      this.ambitoAtencionGateway.ambitoAtencionDeleted(id);
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
