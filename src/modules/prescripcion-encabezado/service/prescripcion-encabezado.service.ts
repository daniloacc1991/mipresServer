import { Injectable, Inject, HttpService, Logger } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { PrescripcionEncabezadoGateway } from '../gateway/prescripcion-encabezado.gateway';
import { PrescripcionEncabezado } from '../entities/prescripcion-encabezado.entity';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { FormaFarmaceutica } from '../../../modules/forma-farmaceutica/entities/forma-farmaceutica';
import { ViaAdministracion } from '../../../modules/via-administracion/entities/via-administracion.entity';
import { UnidadMedidaDosis } from '../../../modules/unidad-medida-dosis/entities/unidad-medida-dosis';
import { Cups } from '../../../modules/cups/entities/cups.entity';
import { TipoDispositivoMedico } from '../../../modules/tipo-dispositivo-medico/entities/tipo-dispositivo-medico';
import { TipoProductoNutricional } from '../../../modules/tipo-producto-nutricional/entities/tipo-producto-nutricional.entity';
import { BodyxFecha } from '../interfaces/body-x-fecha';
import { Municipio } from '../../municipio/entities/municipio.entity';
import { AmbitoAtencion } from '../../../modules/ambito-atencion/entities/ambito-atencion.entity';
import { Cie10 } from '../../../modules/cie10/entities/cie10.entity';
import { ImportaFechaSuccess } from '../interfaces';
import { Frecuencia } from '../../../modules/frecuencia/entities/frecuencia.entity';
import { Presentacion } from '../../../modules/presentacion/entities/presentacion.entity';
import { IndicacionEspecial } from '../../../modules/indicacion-especial/entities/indicacion-especial';
import { ProductoNutricionalForma } from '../../../modules/producto-nutricional-forma/entities/producto-nutricional-forma.entity';
import { ProductoNutricionalViaAdmin } from '../../../modules/producto-nutricional-via-admin/entities/producto-nutricional-via-admin.entity';
import { TipoServicioComplementario } from '../../../modules/tipo-servicio-complementario/entities/tipo-servicio-complementario.entity';
import { ProductoNutricional } from '../../../modules/producto-nutricional/entities/producto-nutricional.entity';
import { MedicamentoPrincipioActivo } from '../../../modules/medicamento-principio-activo/entities/medicamento-principio-activo.entity';
import { MedicamentoIndicacionesUnirs } from '../../../modules/medicamento-indicaciones-unirs/entities/medicamento-indicaciones-unirs.entity';

@Injectable()
export class PrescripcionEncabezadoService {
  constructor(
    @Inject('PrescripcionEncabezadoRepository') private readonly prescripcionEncabezadoRepository: typeof PrescripcionEncabezado,
    @Inject('PrescripcionDetalleRepository') private readonly prescripcionDetalleRepository: typeof PrescripcionDetalle,
    @Inject('MedicamentoPrincipioActivoRepository') private readonly medicamentoPrincipioActivoRepository: typeof MedicamentoPrincipioActivo,
    @Inject('MedicamentoIndicacionesUnirsRepository') private readonly medicamentoIndicacionesUnirsRepository: typeof MedicamentoIndicacionesUnirs,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private prescripcionEncabezadoGateway: PrescripcionEncabezadoGateway,
    private readonly httpService: HttpService,
  ) { }

  async findAll(perPage: number, page: number) {
    return await this.prescripcionEncabezadoRepository.findAndCountAll({
      include: [
        {
          required: false,
          as: 'medicamentos',
          model: PrescripcionDetalle,
          include: [
            FormaFarmaceutica,
            ViaAdministracion,
            UnidadMedidaDosis,
            {
              model: IndicacionEspecial,
              required: false,
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
            MedicamentoPrincipioActivo,
            MedicamentoIndicacionesUnirs,
          ],
          where: {
            TipoTecnologia: 'M',
          },
        },
        {
          required: false,
          as: 'procedimientos',
          model: PrescripcionDetalle,
          include: [
            {
              as: 'codigoFreUso',
              model: Frecuencia,
              required: false,
            },
            {
              as: 'codigoPerDurTrat',
              model: Frecuencia,
              required: false,
            },
            Cups,
          ],
          where: {
            TipoTecnologia: 'P',
          },
        },
        {
          required: false,
          as: 'dispositivos',
          model: PrescripcionDetalle,
          include: [
            TipoDispositivoMedico,
            {
              as: 'codigoFreUso',
              model: Frecuencia,
              required: false,
            },
            {
              as: 'codigoPerDurTrat',
              model: Frecuencia,
            },
          ],
          where: {
            TipoTecnologia: 'D',
          },
        },
        {
          required: false,
          as: 'productosnutricionales',
          model: PrescripcionDetalle,
          include: [
            ProductoNutricional,
            TipoProductoNutricional,
            UnidadMedidaDosis,
            IndicacionEspecial,
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
          where: {
            TipoTecnologia: 'N',
          },
        },
        {
          required: false,
          as: 'serviciosComplementarios',
          model: PrescripcionDetalle,
          include: [
            TipoServicioComplementario,
            IndicacionEspecial,
            {
              as: 'codigoFreUso',
              model: Frecuencia,
              required: false,
            },
            {
              as: 'codigoPerDurTrat',
              model: Frecuencia,
            },
          ],
          where: {
            TipoTecnologia: 'S',
          },
        },
        Municipio,
        AmbitoAtencion,
        Cie10,
      ],
      limit: perPage,
      offset: page === 1 ? 0 : (page - 1) * perPage,
      order: [['NoPrescripcion', 'DESC']],
    });
  }

  async findByTermAll(perPage: number, page: number, term: string) {
    return await this.prescripcionEncabezadoRepository.findAndCount({
      include: [
        {
          required: false,
          as: 'medicamentos',
          model: PrescripcionDetalle,
          include: [
            FormaFarmaceutica,
            ViaAdministracion,
            UnidadMedidaDosis,
            {
              model: IndicacionEspecial,
              required: false,
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
            MedicamentoPrincipioActivo,
            MedicamentoIndicacionesUnirs,
          ],
          where: {
            TipoTecnologia: 'M',
          },
        },
        {
          required: false,
          as: 'procedimientos',
          model: PrescripcionDetalle,
          include: [
            {
              as: 'codigoFreUso',
              model: Frecuencia,
              required: false,
            },
            {
              as: 'codigoPerDurTrat',
              model: Frecuencia,
              required: false,
            },
            Cups,
          ],
          where: {
            TipoTecnologia: 'P',
          },
        },
        {
          required: false,
          as: 'dispositivos',
          model: PrescripcionDetalle,
          include: [
            TipoDispositivoMedico,
            {
              as: 'codigoFreUso',
              model: Frecuencia,
              required: false,
            },
            {
              as: 'codigoPerDurTrat',
              model: Frecuencia,
            },
          ],
          where: {
            TipoTecnologia: 'D',
          },
        },
        {
          required: false,
          as: 'productosnutricionales',
          model: PrescripcionDetalle,
          include: [
            ProductoNutricional,
            TipoProductoNutricional,
            UnidadMedidaDosis,
            IndicacionEspecial,
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
          where: {
            TipoTecnologia: 'N',
          },
        },
        {
          required: false,
          as: 'serviciosComplementarios',
          model: PrescripcionDetalle,
          include: [
            TipoServicioComplementario,
            IndicacionEspecial,
            {
              as: 'codigoFreUso',
              model: Frecuencia,
              required: false,
            },
            {
              as: 'codigoPerDurTrat',
              model: Frecuencia,
            },
          ],
          where: {
            TipoTecnologia: 'S',
          },
        },
        Municipio,
        AmbitoAtencion,
        Cie10,
      ],
      limit: perPage,
      where: {
        $or: [
          { NoPrescripcion: { $ilike: `%${term}%` } },
          { TipoIDPaciente: { $ilike: `%${term}%` } },
          { NroIDPaciente: { $ilike: `%${term}%` } },
          { PAPaciente: { $ilike: `%${term}%` } },
          { SAPaciente: { $ilike: `%${term}%` } },
          { PNPaciente: { $ilike: `%${term}%` } },
          { SNPaciente: { $ilike: `%${term}%` } },
        ],
      },
      offset: page === 1 ? 0 : (page - 1) * perPage,
      order: [['NoPrescripcion', 'DESC']],
    });
  }

  async findById(id) {
    return await this.prescripcionEncabezadoRepository.findByPk(id, {
      include: [
        {
          required: false,
          as: 'medicamentos',
          model: PrescripcionDetalle,
          include: [
            FormaFarmaceutica,
            ViaAdministracion,
            UnidadMedidaDosis,
            {
              model: IndicacionEspecial,
              required: false,
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
            MedicamentoPrincipioActivo,
            MedicamentoIndicacionesUnirs,
          ],
          where: {
            TipoTecnologia: 'M',
          },
        },
        {
          required: false,
          as: 'procedimientos',
          model: PrescripcionDetalle,
          include: [
            {
              as: 'codigoFreUso',
              model: Frecuencia,
              required: false,
            },
            {
              as: 'codigoPerDurTrat',
              model: Frecuencia,
              required: false,
            },
            Cups,
          ],
          where: {
            TipoTecnologia: 'P',
          },
        },
        {
          required: false,
          as: 'dispositivos',
          model: PrescripcionDetalle,
          include: [
            TipoDispositivoMedico,
            {
              as: 'codigoFreUso',
              model: Frecuencia,
              required: false,
            },
            {
              as: 'codigoPerDurTrat',
              model: Frecuencia,
            },
          ],
          where: {
            TipoTecnologia: 'D',
          },
        },
        {
          required: false,
          as: 'productosnutricionales',
          model: PrescripcionDetalle,
          include: [
            ProductoNutricional,
            TipoProductoNutricional,
            UnidadMedidaDosis,
            IndicacionEspecial,
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
          where: {
            TipoTecnologia: 'N',
          },
        },
        {
          required: false,
          as: 'serviciosComplementarios',
          model: PrescripcionDetalle,
          include: [
            TipoServicioComplementario,
            IndicacionEspecial,
            {
              as: 'codigoFreUso',
              model: Frecuencia,
              required: false,
            },
            {
              as: 'codigoPerDurTrat',
              model: Frecuencia,
            },
          ],
          where: {
            TipoTecnologia: 'S',
          },
        },
        Municipio,
        AmbitoAtencion,
        Cie10,
      ],
    });
  }

  async create(prescripcion: PrescripcionEncabezado) {
    const t = await this.seq.transaction();
    try {
      const exits = await this.prescripcionEncabezadoRepository.findAll(
        {
          where: { NoPrescripcion: prescripcion.NoPrescripcion },
          transaction: t,
        });

      if (exits.length === 0) {
        const medicamentos: PrescripcionDetalle[] = prescripcion.medicamentos;
        const procedimientos: PrescripcionDetalle[] = prescripcion.procedimientos;
        const dispositivos: PrescripcionDetalle[] = prescripcion.dispositivos;
        const productosnutricionales: PrescripcionDetalle[] = prescripcion.productosnutricionales;
        const serviciosComplementarios: PrescripcionDetalle[] = prescripcion.serviciosComplementarios;

        const p = await this.prescripcionEncabezadoRepository.create(prescripcion, { transaction: t });
        for (const medicamento of medicamentos) {
          medicamento.prescripcionId = p.id;
          medicamento.TipoTecnologia = 'M';
          // medicamento.IndEsp = medicamento.IndEsp ? medicamento.IndEsp : 10;
          const principiosActivos: MedicamentoPrincipioActivo[] = medicamento.PrincipiosActivos;
          const indicacionesUNIRS: MedicamentoIndicacionesUnirs[] = medicamento.IndicacionesUNIRS;
          const m = await this.prescripcionDetalleRepository.create(medicamento, { transaction: t });
          for (const principiosActivo of principiosActivos) {
            principiosActivo.prescripcionDetalleId = m.id;
            await this.medicamentoPrincipioActivoRepository.create(principiosActivo, { transaction: t });
          }

          for (const indicacionUNIRS of indicacionesUNIRS) {
            indicacionUNIRS.prescripcionDetalleId = m.id;
            await this.medicamentoIndicacionesUnirsRepository.create(indicacionUNIRS, { transaction: t });
          }
        }
        for (const procedimiento of procedimientos) {
          procedimiento.prescripcionId = p.id;
          procedimiento.TipoTecnologia = 'P';
          // procedimiento.IndEsp = procedimiento.IndEsp ? procedimiento.IndEsp : 10;
          await this.prescripcionDetalleRepository.create(procedimiento, { transaction: t });
        }
        for (const dispositivo of dispositivos) {
          dispositivo.prescripcionId = p.id;
          dispositivo.TipoTecnologia = 'D';
          // dispositivo.IndEsp = dispositivo.IndEsp ? dispositivo.IndEsp : 10;
          await this.prescripcionDetalleRepository.create(dispositivo, { transaction: t });
        }
        for (const serviciosComplementario of serviciosComplementarios) {
          serviciosComplementario.prescripcionId = p.id;
          serviciosComplementario.TipoTecnologia = 'S';
          // serviciosComplementario.IndEsp = serviciosComplementario.IndEsp ? serviciosComplementario.IndEsp : 10;
          await this.prescripcionDetalleRepository.create(serviciosComplementario, { transaction: t });
        }
        for (const productosnutricional of productosnutricionales) {
          productosnutricional.prescripcionId = p.id;
          productosnutricional.TipoTecnologia = 'N';
          // productosnutricional.IndEsp = productosnutricional.IndEsp ? productosnutricional.IndEsp : 10;
          await this.prescripcionDetalleRepository.create(productosnutricional, { transaction: t });
        }
        t.commit();
        const pNew = await this.prescripcionEncabezadoRepository.findByPk(p.id);
        this.prescripcionEncabezadoGateway.prescripcionCreated(pNew);
        return pNew;
      } else {
        t.commit();
        return prescripcion;
      }
    } catch (e) {
      Logger.error(e);
      t.rollback();
      if (e.parent) {
        throw e.parent.detail;
      }
      if (e.name === 'SequelizeValidationError') {
        throw e.errors.map(r => {
          return r.message;
        });
      }
      throw e;
    }

  }

  async update(id: number, p: PrescripcionEncabezado) {
    await this.prescripcionEncabezadoRepository.update({ ...p }, { where: { id } });
    const prescripcion = await this.prescripcionEncabezadoRepository.findById(id);
    this.prescripcionEncabezadoGateway.prescripcionUpdated(prescripcion);
    return prescripcion;
  }

  async delete(id: number) {
    await this.prescripcionEncabezadoRepository.destroy({ where: { id } });
    this.prescripcionEncabezadoGateway.prescripcionDeleted(id);
    return;
  }

  async importarxFecha(body: BodyxFecha) {
    const url = `https://wsmipres.sispro.gov.co/WSMIPRESNOPBS/api/Prescripcion/${body.nit}/${body.fecha}/${body.token}`;
    let prescripciones: PrescripcionEncabezado[];

    try {
      Logger.log(JSON.stringify(prescripciones));
      prescripciones = await this.importacion(url);
    } catch (e) {
      throw e;
    }
    const response: ImportaFechaSuccess = {
      success: [],
      fails: [],
    };

    for (const prescripcion of prescripciones) {
      try {
        await this.create(prescripcion);
        response.success.push(prescripcion.NoPrescripcion);
      } catch (error) {
        response.fails.push(prescripcion.NoPrescripcion);
      }
    }
    this.prescripcionEncabezadoGateway.prescripcionImported(response);
    return response;
  }

  private async importacion(url): Promise<PrescripcionEncabezado[]> {
    return new Promise((resolve, reject) => {
      this.httpService.get(url)
        .subscribe(
          rows => {
            resolve(rows.data.map(row => {
              let prescripcion: PrescripcionEncabezado;
              prescripcion = row.prescripcion;
              prescripcion.medicamentos = row.medicamentos;
              prescripcion.procedimientos = row.procedimientos;
              prescripcion.dispositivos = row.dispositivos;
              prescripcion.productosnutricionales = row.productosnutricionales;
              prescripcion.serviciosComplementarios = row.serviciosComplementarios;
              return prescripcion;
            }));
          },
          error => {
            reject(error);
          },
        );
    });
  }
}
