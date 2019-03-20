import { Injectable, Inject } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { ProductoNutricionalViaAdmin } from '../entities/producto-nutricional-via-admin.entity';
import { ProductoNutricionalViaAdminGateway } from '../gateway/producto-nutricional-via-admin.gateway';

@Injectable()
export class ProductoNutricionalViaAdminService {

  constructor(
    @Inject('ProductoNutricionalViaAdminRepository') private readonly productoNutricionalViaAdminRepository: typeof ProductoNutricionalViaAdmin,
    @Inject('SequelizeRepository') private readonly seq: Sequelize,
    private productoNutricionalViaAdminGateway: ProductoNutricionalViaAdminGateway,
  ) { }

  async findAll() {
    return await this.productoNutricionalViaAdminRepository.findAll();
  }

  async findById(id) {
    return await this.productoNutricionalViaAdminRepository.findByPk(id);
  }

  async create(productoNutricionalViaAdmin: ProductoNutricionalViaAdmin) {
    const t = await this.seq.transaction();
    try {
      const element = await this.productoNutricionalViaAdminRepository.create(productoNutricionalViaAdmin, { transaction: t });
      t.commit();
      this.productoNutricionalViaAdminGateway.productoNutricionalViaAdminCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, productoNutricionalViaAdmin: ProductoNutricionalViaAdmin) {
    const t = await this.seq.transaction();
    try {
      delete productoNutricionalViaAdmin.id;
      const res = await this.productoNutricionalViaAdminRepository.update({ ...productoNutricionalViaAdmin }, { where: { id } });
      t.commit();
      const element = await this.productoNutricionalViaAdminRepository.findById(res[0]);
      this.productoNutricionalViaAdminGateway.productoNutricionalViaAdminUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      await this.productoNutricionalViaAdminRepository.destroy({ where: { id } });
      t.commit();
      this.productoNutricionalViaAdminGateway.productoNutricionalViaAdminDeleted(id);
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
