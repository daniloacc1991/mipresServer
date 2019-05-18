import { Injectable, Inject, Logger, HttpService } from '@nestjs/common';
import { Entrega } from '../entities/entrega.entity';
import { Sequelize } from 'sequelize-typescript';
import { EntregaGateway } from '../gateway/entrega.gateway';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { PrescripcionEncabezado } from '../../../modules/prescripcion-encabezado/entities/prescripcion-encabezado.entity';
import { PrescripcionEncabezadoGateway } from '../../../modules/prescripcion-encabezado/gateway/prescripcion-encabezado.gateway';
import { ResponseEntregaAmbito, EntregaMinSalud } from '../interface';
import { ReporteEntrega } from '../../../modules/reporte-entrega/entities/reporte-entrega.entity';
import { Transaction } from 'sequelize';
import { ResponseReporteEntrega } from '../../../modules/reporte-entrega/interfaces/response-reporte-entrega';

@Injectable()
export class EntregaService {

  constructor(
    @Inject('EntregaRepository') private readonly entregaRepository: typeof Entrega,
    @Inject('PrescripcionDetalleRepository') private readonly prescripcionDetRepository: typeof PrescripcionDetalle,
    @Inject('PrescripcionEncabezadoRepository') private readonly prescripcionEncRepository: typeof PrescripcionEncabezado,
    @Inject('ReporteEntregaRepository') private readonly reporteEntregaRepository: typeof ReporteEntrega,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private entregaGateway: EntregaGateway,
    private prescripcionEncabezadoGateway: PrescripcionEncabezadoGateway,
    private http: HttpService,
  ) { }

  async findAll() {
    return await this.entregaRepository.findAll();
  }

  async findById(id: number) {
    return await this.entregaRepository.findByPk(id);
  }

  async create(entrega: EntregaMinSalud) {
    const t = await this.seq.transaction();
    try {
      Logger.log(entrega, 'Entrega desde el Front');
      const indEntregado = entrega.EntTotal == 1 ? true : false;
      const element = await this.entMinSaludToEntregaLocal(entrega, t);
      await this.prescripcionDetRepository.update(
        {
          indEntregado,
          cantidadEntregada: entrega.CantTotEntregada,
        },
        { where: { id: entrega.prescripcionDetalleId } },
      );

      const prescripcionDet = await this.prescripcionDetRepository.findByPk(entrega.prescripcionDetalleId);
      const prescripcionEnc: PrescripcionEncabezado = await this.prescripcionEncRepository.findByPk(prescripcionDet.prescripcionId);
      t.commit();
      this.entregaGateway.entregaCreated(element);
      this.prescripcionEncabezadoGateway.prescripcionUpdated(prescripcionEnc);
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
      const element = await this.entregaRepository.findByPk(id);
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
    return await this.prescripcionDetRepository.findByPk(id, {
      attributes: ['id', 'TipoTecnologia', 'ConOrden'],
      include: [
        {
          model: PrescripcionEncabezado,
          attributes: ['id', 'NoPrescripcion', 'TipoIDPaciente', 'NroIDPaciente'],
        },
      ],
    });
  }

  async entMinSaludToEntregaLocal(ent: EntregaMinSalud, t: Transaction) {
    try {
      const token = await this.tokenEntrega();
      let url = `https://wsmipres.sispro.gov.co/WSSUMMIPRESNOPBS/api/EntregaAmbito/890208758/${token}`;

      const reportePut = {
        ID: 0,
        EstadoEntrega: ent.EstadoEntrega,
        CausaNoEntrega: ent.CausaNoEntrega,
        ValorEntregado: ent.ValorEntregado,
      };

      delete(ent.EstadoEntrega);
      delete(ent.ValorEntregado);

      Logger.log(ent, 'Entrega Despues del delete');
      const entMinSalud = await this.putEntregaAmbito(url, ent);
      const entregaLocal = {
        ...ent,
        IDEntrega: entMinSalud[0].IdEntrega,
        id: entMinSalud[0].Id,
      };

      Logger.log(entregaLocal, 'Entrega Created');
      const element = await this.entregaRepository.create(entregaLocal, { transaction: t });

      url = `https://wsmipres.sispro.gov.co/WSSUMMIPRESNOPBS/api/ReporteEntrega/890208758/${token}`;

      reportePut.ID = entMinSalud[0].Id;
      const responseReporteEntrega = await this.putReporteEntregaMin(url, reportePut);

      const reporteCreated = {
        id: responseReporteEntrega[0].Id,
        IdReporteEntrega: responseReporteEntrega[0].IdReporteEntrega,
        EstadoEntrega: reportePut.EstadoEntrega,
        CausaNoEntrega: reportePut.CausaNoEntrega,
        ValorEntregado: reportePut.ValorEntregado,
        EntregaId: reportePut.ID,
      };

      Logger.log(reportePut, 'Reporte Created');
      await this.reporteEntregaRepository.create(reporteCreated, { transaction: t });

      return element;
    } catch (e) {
      Logger.error(e);
      throw e;
    }
  }

  private async putEntregaAmbito(url, data): Promise<ResponseEntregaAmbito[]> {
    return new Promise((resolve, reject) => {
      this.http.put(url, data)
        .subscribe(
          rows => {
            resolve(rows.data);
          },
          err => {
            Logger.error(err.response.data);
            reject(err.response.data);
          },
        );
    });
  }

  private async putReporteEntregaMin(url, data): Promise<ResponseReporteEntrega[]> {
    return new Promise((resolve, reject) => {
      this.http.put(url, data)
        .subscribe(
          rows => {
            resolve(rows.data);
          },
          err => {
            Logger.error(err.response.data);
            reject(err.response.data);
          },
        );
    });
  }

  private async tokenEntrega(): Promise<string> {
    const url = 'https://wsmipres.sispro.gov.co/WSSUMMIPRESNOPBS/api/GenerarToken/890208758/5BA4903C-7C5A-43BD-A686-EF2012C06326';
    return new Promise((resolve, reject) => {
      this.http.get<string>(url)
        .subscribe(
          rows => {
            resolve(rows.data);
          },
          err => {
            Logger.error(err.response.data);
            reject(err.response.data);
          },
        );
    });
  }
}
