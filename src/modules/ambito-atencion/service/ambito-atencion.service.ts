import { Injectable, Inject } from '@nestjs/common';
import { AmbitoAtencion } from '../entities/ambito-atencion.entity';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AmbitoAtencionService {
  constructor(
    @Inject('AmbitoAtencionRepository') private readonly ambitoAtencionRepository: typeof AmbitoAtencion,
    @Inject('SequelizeRepository') private seq: Sequelize,
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
      const element = await this.ambitoAtencionRepository.update({ ...ambitoAtencion }, { where: { id } });
      t.commit();
      return await this.ambitoAtencionRepository.findById(element[0]);
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      const element = await this.ambitoAtencionRepository.destroy({ where: { id } });
      t.commit();
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
