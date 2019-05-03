import { Injectable, Inject, Logger, HttpService } from '@nestjs/common';
import { Entrega } from '../entities/entrega.entity';
import { Sequelize } from 'sequelize-typescript';
import { EntregaGateway } from '../gateway/entrega.gateway';
import { PrescripcionDetalle } from '../../../modules/prescripcion-detalle/entities/prescripcion-detalle.entity';
import { PrescripcionEncabezado } from '../../../modules/prescripcion-encabezado/entities/prescripcion-encabezado.entity';
import { PrescripcionEncabezadoGateway } from '../../../modules/prescripcion-encabezado/gateway/prescripcion-encabezado.gateway';
import { EntregaMinSalud } from '../interface/entregaMinSalud';

@Injectable()
export class EntregaService {

  constructor(
    @Inject('EntregaRepository') private readonly entregaRepository: typeof Entrega,
    @Inject('PrescripcionDetalleRepository') private readonly prescripcionDetRepository: typeof PrescripcionDetalle,
    @Inject('PrescripcionEncabezadoRepository') private readonly prescripcionEncRepository: typeof PrescripcionEncabezado,
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

  async create(entrega: Entrega) {
    const t = await this.seq.transaction();
    try {
      const prescripcionDet = await this.prescripcionDetRepository.findByPk(entrega.prescripcionDetalleId);
      const indEntregado = entrega.EntTotal === 1 ? true : false;
      const entFinal = await this.entMinSaludToEntregaLocal(entrega);
      const element = await this.entregaRepository.create(entFinal);
      await this.prescripcionDetRepository.update(
        {
          indEntregado,
          cantidadEntregada: element.CantTotEntregada,
        },
        { where: { id: entFinal.prescripcionDetalleId } },
      );

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
    return await this.prescripcionDetRepository.findById(id, {
      attributes: ['id', 'TipoTecnologia', 'ConOrden'],
      include: [
        {
          model: PrescripcionEncabezado,
          attributes: ['id', 'NoPrescripcion', 'TipoIDPaciente', 'NroIDPaciente'],
        },
      ],
    });
  }

  async entMinSaludToEntregaLocal(ent: Entrega) {
    try {
      Logger.log(ent, 'Entrega Recibida');
      const token = await this.tokenEntrega();
      Logger.log(token, 'Token Suministro');
      const url = `https://wsmipres.sispro.gov.co/WSSUMMIPRESNOPBS/api/EntregaAmbito/890208758/${token}`;
      const entMinSalud = await this.putEntregaAmbito(url, ent);
      Logger.log(entMinSalud, 'Paso Put Ministerio');
      const entregaLocal = {
        ...ent,
        IDEntrega: entMinSalud[0].IdEntrega,
      };
      Logger.log(JSON.stringify(entregaLocal), 'Save Entrega Local');
      return entregaLocal;
    } catch (e) {
      Logger.error(e);
      throw e;
    }
  }

  private async putEntregaAmbito(url, data): Promise<any> {
    Logger.log(data, 'Desde la funcion putEntregaAmbito');
    Logger.log(url, 'Desde la funcion putEntregaAmbito');
    return new Promise((resolve, reject) => {
      this.http.put(url, data)
        .subscribe(
          rows => {
            resolve(rows.data);
          },
          err => {
            Logger.error(err);
            reject(err);
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
          error => {
            reject(error);
          },
        );
    });
  }
}
