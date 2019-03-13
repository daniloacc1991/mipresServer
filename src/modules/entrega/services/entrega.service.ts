import { Injectable, Inject } from '@nestjs/common';
import { Entrega } from '../entities/entrega.entity';
import { Sequelize } from 'sequelize-typescript';
import { EntregaGateway } from '../gateway/entrega.gateway';
import { PrescripcionDetalle } from 'src/modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { PrescripcionEncabezado } from 'src/modules/prescripcion-encabezado/entities/prescripcion-encabezado.entity';

@Injectable()
export class EntregaService {

  constructor(
    @Inject('EntregaRepository') private readonly entregaRepository: typeof Entrega,
    @Inject('PrescripcionDetalleRepository') private readonly prescripcionDetalleRepository: typeof PrescripcionDetalle,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private entregaGateway: EntregaGateway,
  ) { }

  async findAll() {
    return await this.entregaRepository.findAll();
  }

  async findById(id: number) {
    return await this.entregaRepository.findById(id);
  }

  async create(entrega: Entrega) {
    const t = await this.seq.transaction();
    try {
      const element = await this.entregaRepository.create(entrega);
      t.commit();
      this.entregaGateway.entregaCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, entrega: Entrega) {
    const t = await this.seq.transaction();
    try {
      delete entrega.id;
      const res = await this.entregaRepository.update({ ...entrega }, { where: { id } });
      t.commit();
      const element = await this.entregaRepository.findById(res[0]);
      this.entregaGateway.entregaUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      const element = await this.entregaRepository.destroy({ where: { id } });
      t.commit();
      this.entregaGateway.entregaDeleted(id);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async findPrescripcionDetalleById(id: number) {
    return await this.prescripcionDetalleRepository.findById(id, {
      attributes: ['id', 'TipoTecnologia', 'ConOrden'],
      include: [
        {
          model: PrescripcionEncabezado,
          attributes: ['id', 'NoPrescripcion', 'TipoIDPaciente', 'NroIDPaciente'],
        },
      ],
    });
  }
}
