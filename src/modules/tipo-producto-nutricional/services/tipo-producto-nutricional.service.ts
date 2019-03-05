import { Injectable, Inject } from '@nestjs/common';
import { TipoProductoNutricional } from '../entities/tipo-producto-nutricional.entity';
import { Sequelize } from 'sequelize-typescript';
import { TipoProductoNutricionalGateway } from '../gateway/tipo-producto-nutricional.gateway';

@Injectable()
export class TipoProductoNutricionalService {

  constructor(
    @Inject('TipoProductoNutricionalRepository') private readonly tipoProductoNutricionalRepository: typeof TipoProductoNutricional,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private tipoProductoNutricionalGateway: TipoProductoNutricionalGateway,
  ) {}

  async findAll() {
    return await this.tipoProductoNutricionalRepository.findAll();
  }

  async findById(id) {
    return await this.tipoProductoNutricionalRepository.findById(id);
  }

  async create(tipoProductoNutricional: TipoProductoNutricional) {
    const t = await this.seq.transaction();
    try {
      const element = await this.tipoProductoNutricionalRepository.create(tipoProductoNutricional, { transaction: t });
      t.commit();
      this.tipoProductoNutricionalGateway.tipoProductoNutricionalCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, tipoProductoNutricional: TipoProductoNutricional) {
    const t = await this.seq.transaction();
    try {
      delete tipoProductoNutricional.id;
      const res = await this.tipoProductoNutricionalRepository.update({ ...tipoProductoNutricional }, { where: { id } });
      t.commit();
      const element = await this.tipoProductoNutricionalRepository.findById(res[0]);
      this.tipoProductoNutricionalGateway.tipoProductoNutricionalUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      await this.tipoProductoNutricionalRepository.destroy({ where: { id } });
      t.commit();
      this.tipoProductoNutricionalGateway.tipoProductoNutricionalDeleted(id);
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
