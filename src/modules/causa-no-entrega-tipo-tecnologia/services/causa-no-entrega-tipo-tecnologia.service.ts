import { Injectable, Inject } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { CausaNoEntregaTipoTecnologia } from '../entites/causa-no-entrega-tipo-tecnologia.entity';
import { CausaNoEntregaTipoTecnologiaGateway } from '../gateway/causa-no-entrega-tipo-tecnologia.gateway';

@Injectable()
export class CausaNoEntregaTipoTecnologiaService {

  constructor(
    // tslint:disable-next-line:max-line-length
    @Inject('CausaNoEntregaTipoTecnologiaRepository') private readonly causaNoEntregaTipoTecnologiaRepository: typeof CausaNoEntregaTipoTecnologia,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private causaNoEntregaTipoTecnologiaGateway: CausaNoEntregaTipoTecnologiaGateway,
  ) { }
  async findAll() {
    return await this.causaNoEntregaTipoTecnologiaRepository.findAll();
  }

  async findById(id: number) {
    return await this.causaNoEntregaTipoTecnologiaRepository.findByPk(id);
  }

  async create(causaNoEntregaTipoTecnologia: CausaNoEntregaTipoTecnologia) {
    const t = await this.seq.transaction();
    try {
      const element = await this.causaNoEntregaTipoTecnologiaRepository.create(causaNoEntregaTipoTecnologia);
      t.commit();
      this.causaNoEntregaTipoTecnologiaGateway.causaNoEntregaTipoTecnologiaCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, causaNoEntregaTipoTecnologia: CausaNoEntregaTipoTecnologia) {
    const t = await this.seq.transaction();
    try {
      delete causaNoEntregaTipoTecnologia.id;
      const res = await this.causaNoEntregaTipoTecnologiaRepository.update({ ...causaNoEntregaTipoTecnologia }, { where: { id } });
      t.commit();
      const element = await this.causaNoEntregaTipoTecnologiaRepository.findById(res[0]);
      this.causaNoEntregaTipoTecnologiaGateway.causaNoEntregaTipoTecnologiaUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      const element = await this.causaNoEntregaTipoTecnologiaRepository.destroy({ where: { id } });
      t.commit();
      this.causaNoEntregaTipoTecnologiaGateway.causaNoEntregaTipoTecnologiaDeleted(id);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

}
