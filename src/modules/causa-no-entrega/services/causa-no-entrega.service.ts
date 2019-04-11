import { Injectable, Inject, Logger } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Transaction } from 'sequelize';
import { CausaNoEntrega } from '../entities/causa-no-entrega.entity';
import { CausaNoEntregaGateway } from '../gateways/causa-no-entrega.gateway';
import { CausaNoEntregaTipoTecnologia } from '../../causa-no-entrega-tipo-tecnologia/entites/causa-no-entrega-tipo-tecnologia.entity';

@Injectable()
export class CausaNoEntregaService {

  constructor(
    @Inject('CausaNoEntregaRepository') private readonly causaNoEntregaRepository: typeof CausaNoEntrega,
    @Inject('CausaNoEntregaTipoTecnologiaRepository') private readonly causaNoEntregaTipoTecnologiaRepository: typeof CausaNoEntregaTipoTecnologia,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private causaNoEntregaGateway: CausaNoEntregaGateway,
  ) { }
  async findAll() {
    return await this.causaNoEntregaRepository.findAll({
      include: [CausaNoEntregaTipoTecnologia],
    });
  }

  async findById(id: number) {
    return await this.causaNoEntregaRepository.findByPk(id, {
      include: [CausaNoEntregaTipoTecnologia],
    });
  }

  async create(causaNoEntrega: CausaNoEntrega) {
    const t = await this.seq.transaction();
    try {
      const tipoTecnologia = causaNoEntrega.tipoTecnologia;
      const element = await this.causaNoEntregaRepository.create(causaNoEntrega, { transaction: t });

      await this.saveCausaNoEntregaTipoTecnologia('M', element.id, tipoTecnologia.medicamento, t);
      await this.saveCausaNoEntregaTipoTecnologia('P', element.id, tipoTecnologia.procedimiento, t);
      await this.saveCausaNoEntregaTipoTecnologia('D', element.id, tipoTecnologia.dispositivoMedico, t);
      await this.saveCausaNoEntregaTipoTecnologia('S', element.id, tipoTecnologia.servicioComplementario, t);
      await this.saveCausaNoEntregaTipoTecnologia('N', element.id, tipoTecnologia.soporteNutricional, t);
      t.commit();
      const respose = await this.findById(element.id);
      this.causaNoEntregaGateway.causaNoEntregaCreated(respose);
      return respose;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, causaNoEntrega: CausaNoEntrega) {
    const t = await this.seq.transaction();
    try {
      const tipoTecnologia = causaNoEntrega.tipoTecnologia;
      await this.causaNoEntregaRepository.update({ ...causaNoEntrega }, { where: { id }, transaction: t });
      await this.updateCausaNoEntregaTipoTecnologia('M', id, tipoTecnologia.medicamento, t);
      await this.updateCausaNoEntregaTipoTecnologia('P', id, tipoTecnologia.procedimiento, t);
      await this.updateCausaNoEntregaTipoTecnologia('D', id, tipoTecnologia.dispositivoMedico, t);
      await this.updateCausaNoEntregaTipoTecnologia('S', id, tipoTecnologia.servicioComplementario, t);
      await this.updateCausaNoEntregaTipoTecnologia('N', id, tipoTecnologia.soporteNutricional, t);
      t.commit();
      const element = await this.causaNoEntregaRepository.findById(id);
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
      const element = await this.causaNoEntregaRepository.destroy({ where: { id }, transaction: t });
      t.commit();
      this.causaNoEntregaGateway.causaNoEntregaDeleted(id);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  private async saveCausaNoEntregaTipoTecnologia(tipo: string, id: number, habilitado: boolean, t: Transaction) {
    try {
      const result = await this.causaNoEntregaTipoTecnologiaRepository.create({
        tipoTecnologia: tipo,
        causaNoEntregaId: id,
        habilitado,
      }, { transaction: t });
      return result;
    } catch (e) {
      throw e;
    }
  }

  private async updateCausaNoEntregaTipoTecnologia(tipo: string, idCausa: number, habilitado: boolean, t: Transaction) {
    try {
      const result = await this.causaNoEntregaTipoTecnologiaRepository.update({
        tipoTecnologia: tipo,
        causaNoEntregaId: idCausa,
        habilitado,
      }, {
          where: { tipoTecnologia: tipo, causaNoEntregaId: idCausa },
          transaction: t,
        });
      return result;
    } catch (e) {
      throw e;
    }
  }
}
