import { Injectable, Inject, HttpService, Logger } from '@nestjs/common';
import { ReporteEntrega } from '../entities/reporte-entrega.entity';
import { Sequelize } from 'sequelize-typescript';
import { ReporteEntregaGateway } from '../gateway/reporte-entrega.gateway';
import { ResponseReporteEntrega } from '../interfaces/response-reporte-entrega';

@Injectable()
export class ReporteEntregaService {

  constructor(
    @Inject('ReporteEntregaRepository') private readonly reporteEntregaRepository: typeof ReporteEntrega,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private reporteEntregaGateway: ReporteEntregaGateway,
    private http: HttpService,
  ) { }

  async findAll() {
    return await this.reporteEntregaRepository.findAll();
  }

  async findById(id: number) {
    return await this.reporteEntregaRepository.findByPk(id);
  }

  async create(reporteEntrega: ReporteEntrega) {
    const t = await this.seq.transaction();
    try {
      const element = await this.reporteEntregaRepository.create(reporteEntrega);
      t.commit();
      this.reporteEntregaGateway.reporteEntregaCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, entrega: ReporteEntrega) {
    const t = await this.seq.transaction();
    try {
      delete entrega.id;
      const res = await this.reporteEntregaRepository.update({ ...entrega }, { where: { id } });
      t.commit();
      const element = await this.reporteEntregaRepository.findById(res[0]);
      this.reporteEntregaGateway.reporteEntregaUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      const element = await this.reporteEntregaRepository.destroy({ where: { id } });
      t.commit();
      this.reporteEntregaGateway.reporteEntregaDeleted(id);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  // private async createReporteEntrega(url, data): Promise<ResponseReporteEntrega[]> {
  //   return new Promise((resolve, reject) => {
  //     this.http.put(url, data)
  //       .subscribe(
  //         rows => {
  //           resolve(rows.data);
  //         },
  //         err => {
  //           Logger.error(err);
  //           reject(err);
  //         },
  //       );
  //   });
  // }

  // private async tokenEntrega(): Promise<string> {
  //   const url = 'https://wsmipres.sispro.gov.co/WSSUMMIPRESNOPBS/api/GenerarToken/890208758/5BA4903C-7C5A-43BD-A686-EF2012C06326';
  //   return new Promise((resolve, reject) => {
  //     this.http.get<string>(url)
  //       .subscribe(
  //         rows => {
  //           resolve(rows.data);
  //         },
  //         err => {
  //           Logger.error(err);
  //           reject(err);
  //         },
  //       );
  //   });
  // }
}
