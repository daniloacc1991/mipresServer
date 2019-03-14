import { Injectable, Inject } from '@nestjs/common';
import { Frecuencia } from '../entities/frecuencia.entity';
import { Sequelize } from 'sequelize-typescript';
import { FrecuenciaGateway } from '../gateway/frecuencia.gateway';

@Injectable()
export class FrecuenciaService {

  constructor(
    @Inject('FrecuenciaRepository') private readonly frecuenciaRepository: typeof Frecuencia,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private frecuenciaGateway: FrecuenciaGateway,
  ) {}

  async findAll() {
    return await this.frecuenciaRepository.findAll();
  }

  async findById(id: number) {
    return await this.frecuenciaRepository.findById(id);
  }

  async findByIdDescripcion(id: number) {
    return await this.frecuenciaRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(frecuencia: Frecuencia) {
    const t = await this.seq.transaction();
    try {
      const element = await this.frecuenciaRepository.create(frecuencia);
      t.commit();
      this.frecuenciaGateway.frecuenciaCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, frecuencia: Frecuencia) {
    const t = await this.seq.transaction();
    try {
      delete frecuencia.id;
      const res = await this.frecuenciaRepository.update({ ...frecuencia }, { where: { id } });
      t.commit();
      const element = await this.frecuenciaRepository.findById(res[0]);
      this.frecuenciaGateway.frecuenciaUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      const element = await this.frecuenciaRepository.destroy({ where: { id } });
      t.commit();
      this.frecuenciaGateway.frecuenciaDeleted(id);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
