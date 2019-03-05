import { Injectable, Inject } from '@nestjs/common';
import { Cups } from '../entities/cups.entity';
import { Sequelize } from 'sequelize-typescript';
import { CupsGateway } from '../gateway/cups.gateway';

@Injectable()
export class CupsService {
  constructor(
    @Inject('CupsRepository') private readonly cupsRepository: typeof Cups,
    @Inject('SequelizeRepository') private readonly seq: Sequelize,
    private cupsGateway: CupsGateway,
  ) {}

  async findAll() {
    return await this.cupsRepository.findAll();
  }

  async findById(id: number) {
    return await this.cupsRepository.findById(id);
  }

  async create(cups: Cups) {
    const t = await this.seq.transaction();
    try {
      const element = await this.cupsRepository.create(cups);
      t.commit();
      this.cupsGateway.cupsCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, cups: Cups) {
    const t = await this.seq.transaction();
    try {
      delete cups.id;
      const res = await this.cupsRepository.update({ ...cups }, { where: { id } });
      t.commit();
      const element = await this.cupsRepository.findById(res[0]);
      this.cupsGateway.cupsUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      const element = await this.cupsRepository.destroy({ where: { id } });
      t.commit();
      this.cupsGateway.cupsDeleted(id);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
