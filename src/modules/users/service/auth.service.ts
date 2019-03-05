import { Injectable, Logger, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload, Auth } from '../interfaces';
import { Sequelize } from 'sequelize-typescript';
import sequelize = require('sequelize');
import { UsersService } from 'src/modules/users/service/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('SequelizeRepository') private seq: Sequelize,
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async singIn(data: Auth) {
    const user: JwtPayload = await this.userService.login(data);
    return this.jwtService.sign(user);
  }

  async validateUser(payload: JwtPayload) {
    return await this.userService.findOneByUsuario(payload.usuario);
  }

  async menu(system: string, user: string): Promise<any[]> {
    return await this.seq.query(`SELECT     o.opcion, o.descripcion, o.ventana
    FROM opcion o
    JOIN opcion_x_grupo og ON o.sistema = og.sistema AND o.opcion = og.opcion
    JOIN usuarios_x_grupo ug ON ug.sistema = o.sistema AND ug.grupo_usuario = og.grupo_usuario
    WHERE o.sistema = :system AND ug.usuario = :user ORDER BY o.secuencia`,
      {
        replacements: { system, user },
        type: sequelize.QueryTypes.SELECT,
      });
  }
}
