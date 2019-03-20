import { Injectable, Inject, Logger } from '@nestjs/common';
import { PrescripcionDetalle } from '../entities/prescripcion-detalle.entity';
import { Sequelize } from 'sequelize-typescript';
import { PrescripcionDetalleGateway } from '../gateway/prescripcion-detalle.gateway';
import { Frecuencia } from 'src/modules/frecuencia/entities/frecuencia.entity';
import { Presentacion } from 'src/modules/presentacion/entities/presentacion.entity';
import { IndicacionEspecial } from 'src/modules/indicacion-especial/entities/indicacion-especial';
import { ProductoNutricionalForma } from 'src/modules/producto-nutricional-forma/entities/producto-nutricional-forma.entity';
import { ProductoNutricionalViaAdmin } from 'src/modules/producto-nutricional-via-admin/entities/producto-nutricional-via-admin.entity';

@Injectable()
export class PrescripcionDetalleService {

  constructor(
    @Inject('PrescripcionDetalleRepository') private readonly prescripcionDetalleRepository: typeof PrescripcionDetalle,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private prescripcionDetalleGateway: PrescripcionDetalleGateway,
  ) { }

  async findAll() {
    return await this.prescripcionDetalleRepository.findAll();
  }

  async findById(id: number) {
    try {
      return await this.prescripcionDetalleRepository.findByPk(id, {
        include: [
          IndicacionEspecial,
          {
            as: 'codigoFreUso',
            model: Frecuencia,
          },
          {
            as: 'codigoPerDurTrat',
            model: Frecuencia,
          },
          {
            as: 'codigoUFCantTotal',
            model: Presentacion,
          },
          {
            as: 'codigoFreAdmon',
            model: Frecuencia,
          },
          {
            as: 'duracionTrat',
            model: Frecuencia,
          },
          ProductoNutricionalForma,
          ProductoNutricionalViaAdmin,
        ],
      });
    } catch (e) {
      Logger.error(e);
      throw e;
    }
  }

  async create(prescripcionDetalle: PrescripcionDetalle) {
    const t = await this.seq.transaction();
    try {
      const element = await this.prescripcionDetalleRepository.create(prescripcionDetalle, { transaction: t });
      t.commit();
      this.prescripcionDetalleGateway.prescripcionDetalleCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, prescripcionDetalle: PrescripcionDetalle) {
    const t = await this.seq.transaction();
    try {
      delete prescripcionDetalle.id;
      const res = await this.prescripcionDetalleRepository.update({ ...prescripcionDetalle }, { where: { id } });
      t.commit();
      const element = await this.prescripcionDetalleRepository.findById(res[0]);
      this.prescripcionDetalleGateway.prescripcionDetalleUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      await this.prescripcionDetalleRepository.destroy({ where: { id } });
      t.commit();
      this.prescripcionDetalleGateway.prescripcionDetalleDeleted(id);
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
