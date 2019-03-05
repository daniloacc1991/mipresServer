import { Injectable, Inject } from '@nestjs/common';
import { UnidadMedidaDosis } from '../entities/unidad-medida-dosis';
import { Sequelize } from 'sequelize-typescript';
import { UnidadMedidaDosisGateway } from '../gateway/unidad-medida-dosis.gateway';

@Injectable()
export class UnidadMedidaDosisService {
  constructor(
    @Inject('UnidadMedidaDosisRepository') private readonly unidadMedidaDosisRepository: typeof UnidadMedidaDosis,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private unidadMedidaDosisgateway: UnidadMedidaDosisGateway,
  ) {}

  async findAll() {
    return await this.unidadMedidaDosisRepository.findAll();
  }

  async findById(id) {
    return await this.unidadMedidaDosisRepository.findById(id);
  }

  async create(unidadMedidaDosis: UnidadMedidaDosis) {
    const t = await this.seq.transaction();
    try {
      const element = await this.unidadMedidaDosisRepository.create(unidadMedidaDosis, { transaction: t });
      t.commit();
      this.unidadMedidaDosisgateway.unidadMedidaDosisCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, unidadMedidaDosis: UnidadMedidaDosis) {
    const t = await this.seq.transaction();
    try {
      delete unidadMedidaDosis.id;
      const res = await this.unidadMedidaDosisRepository.update({ ...unidadMedidaDosis }, { where: { id } });
      t.commit();
      const element = await this.unidadMedidaDosisRepository.findById(res[0]);
      this.unidadMedidaDosisgateway.unidadMedidaDosisUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      await this.unidadMedidaDosisRepository.destroy({ where: { id } });
      t.commit();
      this.unidadMedidaDosisgateway.unidadMedidaDosisDeleted(id);
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
