import { Injectable, Inject, HttpService, Logger } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { PrescripcionEncabezadoGateway } from '../gateway/prescripcion-encabezado.gateway';
import { PrescripcionEncabezado } from '../entities/prescripcion-encabezado.entity';
import { PrescripcionDetalle } from 'src/modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { FormaFarmaceutica } from 'src/modules/forma-farmaceutica/entities/forma-farmaceutica';
import { ViaAdministracion } from 'src/modules/via-administracion/entities/via-administracion.entity';
import { UnidadMedidaDosis } from 'src/modules/unidad-medida-dosis/entities/unidad-medida-dosis';
import { Presentacion } from 'src/modules/presentacion/entities/presentacion.entity';
import { Cups } from 'src/modules/cups/entities/cups.entity';
import { TipoDispositivoMedico } from 'src/modules/tipo-dispositivo-medico/entities/tipo-dispositivo-medico';
import { TipoProductoNutricional } from 'src/modules/tipo-producto-nutricional/entities/tipo-producto-nutricional.entity';
import { BodyxFecha } from '../interfaces/body-x-fecha';
import { Municipio } from 'src/modules/municipio/entities/municipio';
import { AmbitoAtencion } from 'src/modules/ambito-atencion/entities/ambito-atencion.entity';
import { Cie10 } from 'src/modules/cie10/entities/cie10.entity';

@Injectable()
export class PrescripcionEncabezadoService {
  constructor(
    @Inject('PrescripcionEncabezadoRepository') private readonly prescripcionEncabezadoRepository: typeof PrescripcionEncabezado,
    @Inject('PrescripcionDetalleRepository') private readonly prescripcionDetalleRepository: typeof PrescripcionDetalle,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private prescripcionEncabezadoGateway: PrescripcionEncabezadoGateway,
    private readonly httpService: HttpService,
  ) { }

  async findAll() {
    return await this.prescripcionEncabezadoRepository.findAll({
      include: [
        {
          required: false,
          as: 'medicamentos',
          model: PrescripcionDetalle,
          include: [
            FormaFarmaceutica,
            ViaAdministracion,
            UnidadMedidaDosis,
          ],
          where: {
            TipoTecnologia: 'M',
          },
        },
        {
          required: false,
          as: 'procedimientos',
          model: PrescripcionDetalle,
          include: [Cups],
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
            TipoProductoNutricional,
            UnidadMedidaDosis,
          ],
          where: {
            TipoTecnologia: 'N',
          },
        },
        {
          required: false,
          as: 'serviciosComplementarios',
          model: PrescripcionDetalle,
          where: {
            TipoTecnologia: 'S',
          },
        },
        {
          model: Municipio,
          attributes: ['descripcion', 'departamento'],
        },
        {
          model: AmbitoAtencion,
          attributes: ['descripcion'],
        },
        {
          model: Cie10,
          attributes: ['descripcion'],
        },
      ],
    });
  }

  async findById(id) {
    return await this.prescripcionEncabezadoRepository.findById(id, {
      include: [
        {
          required: false,
          as: 'medicamentos',
          model: PrescripcionDetalle,
          include: [
            FormaFarmaceutica,
            ViaAdministracion,
            UnidadMedidaDosis,
          ],
          where: {
            TipoTecnologia: 'M',
          },
        },
        {
          required: false,
          as: 'procedimientos',
          model: PrescripcionDetalle,
          include: [Cups],
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
            TipoProductoNutricional,
            UnidadMedidaDosis,
          ],
          where: {
            TipoTecnologia: 'N',
          },
        },
        {
          required: false,
          as: 'serviciosComplementarios',
          model: PrescripcionDetalle,
          where: {
            TipoTecnologia: 'S',
          },
        },
        {
          model: Municipio,
          attributes: ['descripcion', 'departamento'],
        },
        {
          model: AmbitoAtencion,
          attributes: ['descripcion'],
        },
        {
          model: Cie10,
          attributes: ['descripcion'],
        },
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
          // const principiosActivos: MedicamentoPrincipio[] = medicamento.PrincipiosActivos;
          // const indicacionesUNIRS: MedicamentoIndicacion[] = medicamento.IndicacionesUNIRS ? medicamento.IndicacionesUNIRS : [];
          const m = await this.prescripcionDetalleRepository.create(medicamento, { transaction: t });
          // for (const principiosActivo of principiosActivos) {
          //   principiosActivo.medicamentoId = m.id;
          //   await this.medicamentoPrincipioRepository.create(principiosActivo, { transaction: t });
          // }

          // for (const indicacionUNIRS of indicacionesUNIRS) {
          //   indicacionUNIRS.medicamentoId = m.id;
          //   await this.medicamentoIndicacionRepository.create(indicacionUNIRS, { transaction: t });
          // }
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
        this.prescripcionEncabezadoGateway.prescripcionCreated(p);
        t.commit();
        return p;
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
      prescripciones = await this.importacion(url);
    } catch (e) {
      throw e;
    }
    const response = {
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
    Logger.log('Finalizo a For');
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
