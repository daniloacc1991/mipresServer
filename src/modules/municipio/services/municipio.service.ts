import { Injectable, Inject } from '@nestjs/common';
import { Municipio } from '../entities/municipio';
import { Sequelize } from 'sequelize-typescript';
import { MunicipioGateway } from '../gateway/municipio.gateway';

@Injectable()
export class MunicipioService {
  constructor(
    @Inject('MunicipioRepository') private readonly municipioRepository: typeof Municipio,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private municipioGateway: MunicipioGateway,
  ) { }

  async findAll() {
    return await this.municipioRepository.findAll();
  }

  async findById(id) {
    return await this.municipioRepository.findById(id);
  }

  async create(municipio: Municipio) {
    const t = await this.seq.transaction();
    try {
      const element = await this.municipioRepository.create(municipio, { transaction: t });
      t.commit();
      this.municipioGateway.municipioCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, municipio: Municipio) {
    const t = await this.seq.transaction();
    try {
      delete municipio.id;
      const res = await this.municipioRepository.update({ ...municipio }, { where: { id } });
      t.commit();
      const element = await this.municipioRepository.findById(res[0]);
      this.municipioGateway.municipioUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      await this.municipioRepository.destroy({ where: { id } });
      t.commit();
      this.municipioGateway.municipioDeleted(id);
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
