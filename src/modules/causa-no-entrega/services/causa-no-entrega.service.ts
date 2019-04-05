import { Injectable, Inject } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { CausaNoEntrega } from '../entities/causa-no-entrega.entity';
import { CausaNoEntregaGateway } from '../gateways/causa-no-entrega.gateway';

@Injectable()
export class CausaNoEntregaService {

  constructor(
    @Inject('CausaNoEntregaRepository') private readonly causaNoEntregaRepository: typeof CausaNoEntrega,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private causaNoEntregaGateway: CausaNoEntregaGateway,
  ) { }
  async findAll() {
    return await this.causaNoEntregaRepository.findAll();
  }

  async findById(id: number) {
    return await this.causaNoEntregaRepository.findByPk(id);
  }

  async create(causaNoEntrega: CausaNoEntrega) {
    const t = await this.seq.transaction();
    try {
      const element = await this.causaNoEntregaRepository.create(causaNoEntrega);
      t.commit();
      this.causaNoEntregaGateway.causaNoEntregaCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, causaNoEntrega: CausaNoEntrega) {
    const t = await this.seq.transaction();
    try {
      delete causaNoEntrega.id;
      const res = await this.causaNoEntregaRepository.update({ ...causaNoEntrega }, { where: { id } });
      t.commit();
      const element = await this.causaNoEntregaRepository.findById(res[0]);
      this.causaNoEntregaGateway.causaNoEntregaUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      const element = await this.causaNoEntregaRepository.destroy({ where: { id } });
      t.commit();
      this.causaNoEntregaGateway.causaNoEntregaDeleted(id);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
