import { Injectable, Inject, Logger } from '@nestjs/common';
import { PrescripcionDetalle } from '../entities/prescripcion-detalle.entity';
import { Sequelize } from 'sequelize-typescript';
import { PrescripcionDetalleGateway } from '../gateway/prescripcion-detalle.gateway';
import { Frecuencia } from '../../../modules/frecuencia/entities/frecuencia.entity';
import { Presentacion } from '../../../modules/presentacion/entities/presentacion.entity';
import { IndicacionEspecial } from '../../../modules/indicacion-especial/entities/indicacion-especial';
import { ProductoNutricionalForma } from '../../../modules/producto-nutricional-forma/entities/producto-nutricional-forma.entity';
import { ProductoNutricionalViaAdmin } from '../../../modules/producto-nutricional-via-admin/entities/producto-nutricional-via-admin.entity';
import { TipoServicioComplementario } from '../../../modules/tipo-servicio-complementario/entities/tipo-servicio-complementario.entity';
import { PrescripcionEncabezado } from '../../../modules/prescripcion-encabezado/entities/prescripcion-encabezado.entity';
import { TipoProductoNutricional } from '../../../modules/tipo-producto-nutricional/entities/tipo-producto-nutricional.entity';
import { ProductoNutricional } from '../../../modules/producto-nutricional/entities/producto-nutricional.entity';
import { Cups } from '../../../modules/cups/entities/cups.entity';
import { Entrega } from '../../../modules/entrega/entities/entrega.entity';
import sequelize = require('sequelize');
import { ReporteEntrega } from '../../../modules/reporte-entrega/entities/reporte-entrega.entity';

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
          TipoServicioComplementario,
          TipoProductoNutricional,
          IndicacionEspecial,
          {
            as: 'codigoFreUso',
            model: Frecuencia,
            paranoid: false,
          },
          {
            as: 'codigoPerDurTrat',
            model: Frecuencia,
            paranoid: false,
          },
          {
            as: 'codigoUFCantTotal',
            model: Presentacion,
            paranoid: false,
          },
          {
            as: 'codigoFreAdmon',
            model: Frecuencia,
            paranoid: false,
          },
          {
            as: 'duracionTrat',
            model: Frecuencia,
            paranoid: false,
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

  async findByJuntaId(perPage: number, page: number, juntaId: number) {
    return await this.prescripcionDetalleRepository.findAndCountAll({
      include: [
        TipoServicioComplementario,
        ProductoNutricional,
        TipoProductoNutricional,
        Cups,
        {
          model: PrescripcionEncabezado,
          required: true,
        },
      ],
      where: {
        EstJM: juntaId,
      },
      order: [
        [{ model: PrescripcionEncabezado, as: 'prescripcion' }, 'NoPrescripcion', 'DESC'],
      ],
      limit: perPage,
      offset: page === 1 ? 0 : (page - 1) * perPage,
    });
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

  async entregas() {
    try {
      return await this.prescripcionDetalleRepository.findAll({
        attributes: [
          ['id', 'Id'],
          ['tipo_tecnologia', 'TipoTecnologia'],
          ['consecutivo_orden', 'ConOrden'],
          ['prescripcion_id', 'PrescripcionId'],
          [sequelize.literal('"prescripcion"."NoPrescripcion"'), 'NoPrescripcion'],
          [sequelize.fn('SUM', sequelize.col('valor_entregado')), 'ValorTotal'],
        ],
        include: [
          {
            attributes: [],
            model: PrescripcionEncabezado,
            required: true,
          },
          {
            attributes: [],
            model: Entrega,
            include: [
              {
                attributes: [],
                model: ReporteEntrega,
                required: true,
              },
            ],
            required: true,
          },
        ],
        group: [
          '"PrescripcionDetalle"."id"',
          'tipo_tecnologia',
          'consecutivo_orden',
          'prescripcion_id',
          '"prescripcion"."NoPrescripcion"',
        ],
        raw: true,
      });
    } catch (e) {
      throw e;
    }
  }
}
