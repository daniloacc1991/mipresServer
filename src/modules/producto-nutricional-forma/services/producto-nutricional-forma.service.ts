import { Injectable, Inject } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { ProductoNutricionalForma } from '../entities/producto-nutricional-forma.entity';
import { ProductoNutricionalFormaGateway } from '../gateway/producto-nutricional-forma.gateway';

@Injectable()
export class ProductoNutricionalFormaService {

  constructor(
    @Inject('ProductoNutricionalFormaRepository') private readonly productoNutricionalFormaRepository: typeof ProductoNutricionalForma,
    @Inject('SequelizeRepository') private readonly seq: Sequelize,
    private productoNutricionalFormaGateway: ProductoNutricionalFormaGateway,
  ) {}
  async findAll() {
    return await this.productoNutricionalFormaRepository.findAll();
  }

  async findById(id) {
    return await this.productoNutricionalFormaRepository.findByPk(id);
  }

  async create(productoNutricionalForma: ProductoNutricionalForma) {
    const t = await this.seq.transaction();
    try {
      const element = await this.productoNutricionalFormaRepository.create(productoNutricionalForma, { transaction: t });
      t.commit();
      this.productoNutricionalFormaGateway.productoNutricionalFormaCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, productoNutricionalForma: ProductoNutricionalForma) {
    const t = await this.seq.transaction();
    try {
      delete productoNutricionalForma.id;
      const res = await this.productoNutricionalFormaRepository.update({ ...productoNutricionalForma }, { where: { id } });
      t.commit();
      const element = await this.productoNutricionalFormaRepository.findById(res[0]);
      this.productoNutricionalFormaGateway.productoNutricionalFormaUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      await this.productoNutricionalFormaRepository.destroy({ where: { id } });
      t.commit();
      this.productoNutricionalFormaGateway.productoNutricionalFormaDeleted(id);
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
