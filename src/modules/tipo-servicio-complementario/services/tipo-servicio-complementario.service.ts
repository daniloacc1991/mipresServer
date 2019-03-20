import { Injectable, Inject } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { TipoServicioComplementario } from '../entities/tipo-servicio-complementario.entity';
import { TipoServicioComplementarioGateway } from '../gateway/tipo-servicio-complementario.gateway';

@Injectable()
export class TipoServicioComplementarioService {

  constructor(
    @Inject('TipoServicioComplementarioRepository') private readonly tipoServicioComplementarioRepository: typeof TipoServicioComplementario,
    @Inject('SequelizeRepository') private seq: Sequelize,
    private tipoServicioComplementarioGateway: TipoServicioComplementarioGateway,
  ) {}

  async findAll() {
    return await this.tipoServicioComplementarioRepository.findAll();
  }

  async findById(id) {
    return await this.tipoServicioComplementarioRepository.findByPk(id);
  }

  async create(tipoServicioComplementario: TipoServicioComplementario) {
    const t = await this.seq.transaction();
    try {
      const element = await this.tipoServicioComplementarioRepository.create(tipoServicioComplementario, { transaction: t });
      t.commit();
      this.tipoServicioComplementarioGateway.tipoServicioComplementarioCreated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async update(id: number, tipoServicioComplementario: TipoServicioComplementario) {
    const t = await this.seq.transaction();
    try {
      delete tipoServicioComplementario.id;
      const res = await this.tipoServicioComplementarioRepository.update({ ...tipoServicioComplementario }, { where: { id } });
      t.commit();
      const element = await this.tipoServicioComplementarioRepository.findById(res[0]);
      this.tipoServicioComplementarioGateway.tipoServicioComplementarioUpdated(element);
      return element;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

  async delete(id: number) {
    const t = await this.seq.transaction();
    try {
      await this.tipoServicioComplementarioRepository.destroy({ where: { id } });
      t.commit();
      this.tipoServicioComplementarioGateway.tipoServicioComplementarioDeleted(id);
      return;
    } catch (e) {
      t.rollback();
      throw e;
    }
  }

}
