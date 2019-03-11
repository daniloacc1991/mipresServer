import { Injectable, Inject } from '@nestjs/common';
import { IndicacionEspecial } from '../entities/indicacion-especial';
import { Sequelize } from 'sequelize-typescript';
import { IndicacionEspecialGateway } from '../gateway/indicacion-especial.gateway';

@Injectable()
export class IndicacionEspecialService {

  constructor(
    @Inject('IndicacionEspecialRepository') private readonly indicacionEspecialRepository: typeof IndicacionEspecial,
    @Inject('SequelizeRepository') private readonly seq: Sequelize,
    private indicacionEspecialGateway: IndicacionEspecialGateway,
  ) {}

  async findAll() {
    return await this.indicacionEspecialRepository.findAll();
  }

  async findById(id: number) {
    return await this.indicacionEspecialRepository.findById(id);
  }

  async create(indicacionEspecial: IndicacionEspecial) {
    const t = await this.seq.transaction();
    try {
      const element = await this.indicacionEspecialRepository.create(indicacionEspecial);
      t.commit();
      this.indicacionEspecialGateway.indicacionEspecialCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, indicacionEspecial: IndicacionEspecial) {
    const t = await this.seq.transaction();
    try {
      delete indicacionEspecial.id;
      const res = await this.indicacionEspecialRepository.update({ ...indicacionEspecial }, { where: { id } });
      t.commit();
      const element = await this.indicacionEspecialRepository.findById(res[0]);
      this.indicacionEspecialGateway.indicacionEspecialUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      const element = await this.indicacionEspecialRepository.destroy({ where: { id } });
      t.commit();
      this.indicacionEspecialGateway.indicacionEspecialDeleted(id);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
