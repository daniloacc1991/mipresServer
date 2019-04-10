import { Controller, UseGuards, Res, HttpStatus, HttpException, Param, Body } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CausaNoEntregaTipoTecnologiaService } from '../services/causa-no-entrega-tipo-tecnologia.service';
import { CausaNoEntregaTipoTecnologia } from '../entites/causa-no-entrega-tipo-tecnologia.entity';

@ApiUseTags('Causa No Entrega Tipo Tecnologia')
@ApiBearerAuth()
@Controller('causa-no-entrega-tipo-tecnologia')
export class CausaNoEntregaTipoTecnologiaController {

  constructor(
    private causaNoEntregaTipoTecnologiaService: CausaNoEntregaTipoTecnologiaService,
  ) { }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return await this.causaNoEntregaTipoTecnologiaService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findbyId(@Res() res, @Param('id') id: number) {
    try {
      const element = await this.causaNoEntregaTipoTecnologiaService.findById(id);
      if (element) {
        res.status(HttpStatus.OK).json(element);
      } else {
        res.status(HttpStatus.NO_CONTENT).json({});
      }
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() causaNoEntregaTipoTecnologia: CausaNoEntregaTipoTecnologia, @Res() res) {
    try {
      const element = await this.causaNoEntregaTipoTecnologiaService.create(causaNoEntregaTipoTecnologia);
      res.status(HttpStatus.CREATED).json(element);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() causaNoEntregaTipoTecnologia: CausaNoEntregaTipoTecnologia, @Param('id') id: number, @Res() res) {
    try {
      const element = await this.causaNoEntregaTipoTecnologiaService.update(id, causaNoEntregaTipoTecnologia);
      res.status(HttpStatus.OK).json(element);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.NOT_MODIFIED);
    }
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id') id: number, @Res() res) {
    try {
      await this.causaNoEntregaTipoTecnologiaService.delete(id);
      res.status(HttpStatus.OK).json({});
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

}
