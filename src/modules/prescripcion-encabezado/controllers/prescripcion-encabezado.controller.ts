import { Controller, UseGuards, Res, Param, HttpStatus, HttpException, Body, Logger } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { PrescripcionEncabezadoService } from '../service/prescripcion-encabezado.service';
import { PrescripcionEncabezado } from '../entities/prescripcion-encabezado.entity';
import { BodyxFecha } from '../interfaces/body-x-fecha';

@ApiUseTags('Prescripcion Encabezado')
@ApiBearerAuth()
@Controller('prescripcion-encabezado')
export class PrescripcionEncabezadoController {
  constructor(
    private prescripcionEncabezadoService: PrescripcionEncabezadoService,
  ) { }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return await this.prescripcionEncabezadoService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findById(@Res() res, @Param('id') id: number) {
    const prescripcion: PrescripcionEncabezado = await this.prescripcionEncabezadoService.findById(+id);
    if (prescripcion) {
      res.status(HttpStatus.OK).json(prescripcion);
    } else {
      res.status(HttpStatus.NO_CONTENT).json([]);
    }
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() prescripcion: PrescripcionEncabezado) {
    try {
      return await this.prescripcionEncabezadoService.create(prescripcion);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, 400);
    }
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() p: PrescripcionEncabezado, @Param('id') id: number, @Res() res) {
    try {
      const element = await this.prescripcionEncabezadoService.update(id, p);
      res.status(HttpStatus.OK).json(element);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.NOT_MODIFIED);
    }
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async destroy(@Param('id') id, @Res() res) {
    try {
      await this.prescripcionEncabezadoService.delete(id);
      res.status(HttpStatus.OK).json({});
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('importarxFecha')
  // @UseGuards(AuthGuard('jwt'))
  async importarxFecha(@Body() body: BodyxFecha, @Res() res) {
    Logger.log(body, 'Llego la peticion de importación');
    try {
      const response = await this.prescripcionEncabezadoService.importarxFecha(body);
      res.status(HttpStatus.OK).json(response);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }
}
