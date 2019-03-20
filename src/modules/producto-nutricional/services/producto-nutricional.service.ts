import { Injectable, Inject } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { ProductoNutricional } from '../entities/producto-nutricional.entity';
import { ProductoNutricionalGateway } from '../gateway/producto-nutricional.gateway';

@Injectable()
export class ProductoNutricionalService {

  constructor(
    @Inject('ProductoNutricionalRepository') private readonly productoNutricionalRepository: typeof ProductoNutricional,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private productoNutricionalGateway: ProductoNutricionalGateway,
  ) {}

  async findAll() {
    return await this.productoNutricionalRepository.findAll();
  }

  async findById(id) {
    return await this.productoNutricionalRepository.findByPk(id);
  }

  async create(productoNutricional: ProductoNutricional) {
    const t = await this.seq.transaction();
    try {
      const element = await this.productoNutricionalRepository.create(productoNutricional, { transaction: t });
      t.commit();
      this.productoNutricionalGateway.productoNutricionalCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, productoNutricional: ProductoNutricional) {
    const t = await this.seq.transaction();
    try {
      delete productoNutricional.id;
      const res = await this.productoNutricionalRepository.update({ ...productoNutricional }, { where: { id } });
      t.commit();
      const element = await this.productoNutricionalRepository.findById(res[0]);
      this.productoNutricionalGateway.productoNutricionalUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      await this.productoNutricionalRepository.destroy({ where: { id } });
      t.commit();
      this.productoNutricionalGateway.productoNutricionalDeleted(id);
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
