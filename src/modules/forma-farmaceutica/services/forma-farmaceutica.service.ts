import { Injectable, Inject } from '@nestjs/common';
import { FormaFarmaceutica } from '../entities/forma-farmaceutica';
import { Sequelize } from 'sequelize-typescript';
import { FormaFarmaceuticaGateway } from '../gateway/forma-farmaceutica.gateway';

@Injectable()
export class FormaFarmaceuticaService {
  constructor(
    @Inject('FormaFarmaceuticaRepository') private readonly formaFarmaceuticaRepository: typeof FormaFarmaceutica,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private formaFarmaceuticaGateway: FormaFarmaceuticaGateway,
  ) {}

  async findAll() {
    return await this.formaFarmaceuticaRepository.findAll();
  }

  async findById(id) {
    return await this.formaFarmaceuticaRepository.findById(id);
  }

  async create(formaFarmaceutica: FormaFarmaceutica) {
    const t = await this.seq.transaction();
    try {
      const element = await this.formaFarmaceuticaRepository.create(formaFarmaceutica, { transaction: t });
      t.commit();
      this.formaFarmaceuticaGateway.formaFarmaceuticaCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, formaFarmaceutica: FormaFarmaceutica) {
    const t = await this.seq.transaction();
    try {
      delete formaFarmaceutica.id;
      const res = await this.formaFarmaceuticaRepository.update({ ...formaFarmaceutica }, { where: { id } });
      t.commit();
      const element = await this.formaFarmaceuticaRepository.findById(res[0]);
      this.formaFarmaceuticaGateway.formaFarmaceuticaUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      await this.formaFarmaceuticaRepository.destroy({ where: { id } });
      t.commit();
      this.formaFarmaceuticaGateway.formaFarmaceuticaDeleted(id);
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
