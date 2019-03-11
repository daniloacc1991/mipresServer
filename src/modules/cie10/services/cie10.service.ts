import { Injectable, Inject } from '@nestjs/common';
import { Cie10 } from '../entities/cie10.entity';
import { Sequelize } from 'sequelize-typescript';
import { Cie10Gateway } from '../gateway/cie10.gateway';

@Injectable()
export class Cie10Service {
  constructor(
    @Inject('Cie10Repository') private readonly cie10Repository: typeof Cie10,
    @Inject('SequelizeRepository') private readonly seq: Sequelize,
    private cie10Gateway: Cie10Gateway,
  ) { }

  async findAll() {
    return await this.cie10Repository.findAll();
  }

  async findById(id: number) {
    return await this.cie10Repository.findById(id);
  }

  async create(cie10: Cie10) {
    const t = await this.seq.transaction();
    try {
      const element = await this.cie10Repository.create(cie10);
      t.commit();
      this.cie10Gateway.cie10Created(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, cie10: Cie10) {
    const t = await this.seq.transaction();
    try {
      delete cie10.id;
      const res = await this.cie10Repository.update({ ...cie10 }, { where: { id } });
      t.commit();
      const element = await this.cie10Repository.findById(res[0]);
      this.cie10Gateway.cie10Updated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      const element = await this.cie10Repository.destroy({ where: { id } });
      t.commit();
      this.cie10Gateway.cie10Deleted(id);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
