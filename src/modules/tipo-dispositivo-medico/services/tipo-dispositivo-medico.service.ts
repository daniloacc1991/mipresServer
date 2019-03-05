import { Injectable, Inject } from '@nestjs/common';
import { TipoDispositivoMedico } from '../entities/tipo-dispositivo-medico';
import { Sequelize } from 'sequelize';
import { TipoDispositivoMedicoGateway } from '../gateway/tipo-dispositivo-medico.gateway';

@Injectable()
export class TipoDispositivoMedicoService {

  constructor(
    @Inject('TipoDispositivoMedicoRepository') private readonly tipoDispostivoMedicoRepository: typeof TipoDispositivoMedico,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private tipoDispositivoMedicoGateway: TipoDispositivoMedicoGateway,
  ) { }

  async findAll() {
    return await this.tipoDispostivoMedicoRepository.findAll();
  }

  async findById(id) {
    return await this.tipoDispostivoMedicoRepository.findById(id);
  }

  async create(tipoDispositivoMedico: TipoDispositivoMedico) {
    const t = await this.seq.transaction();
    try {
      const element = await this.tipoDispostivoMedicoRepository.create(tipoDispositivoMedico, { transaction: t });
      t.commit();
      this.tipoDispositivoMedicoGateway.tipoDispositivoMedicoCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, tipoDispositivoMedico: TipoDispositivoMedico) {
    const t = await this.seq.transaction();
    try {
      delete tipoDispositivoMedico.id;
      const res = await this.tipoDispostivoMedicoRepository.update({ ...tipoDispositivoMedico }, { where: { id } });
      t.commit();
      const element = await this.tipoDispostivoMedicoRepository.findById(res[0]);
      this.tipoDispositivoMedicoGateway.tipoDispositivoMedicoUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      await this.tipoDispostivoMedicoRepository.destroy({ where: { id } });
      t.commit();
      this.tipoDispositivoMedicoGateway.tipoDispositivoMedicoDeleted(id);
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }
}
