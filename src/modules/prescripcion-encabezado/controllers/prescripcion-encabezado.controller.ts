import { Controller, Get, Param, Res, HttpStatus, Post, Body, HttpException, Put, HttpCode, Delete } from '@nestjs/common';
import { PrescripcionEncabezadoService } from '../service/prescripcion-encabezado.service';
import { PrescripcionEncabezado } from '../entities/prescripcion-encabezado.entity';

@Controller('prescripcion-encabezado')
export class PrescripcionEncabezadoController {
  constructor(
    private prescripcionEncabezadoService: PrescripcionEncabezadoService,
  ) {}

  @Get()
  // @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return await this.prescripcionEncabezadoService.findAll();
  }

  @Get(':id')
  // @UseGuards(AuthGuard('jwt'))
  async findById(@Res() res, @Param('id') id: number) {
    const prescripcion: PrescripcionEncabezado = await this.prescripcionEncabezadoService.findById(+id);
    if (prescripcion) {
      res.status(HttpStatus.OK).json(prescripcion);
    } else {
      res.status(HttpStatus.NO_CONTENT).json([]);
    }
  }

  @Post()
  // @UseGuards(AuthGuard('jwt'))
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
  // @UseGuards(AuthGuard('jwt'))
  async update(@Body() p: PrescripcionEncabezado, @Param('id') id) {
    return await this.prescripcionEncabezadoService.update(id, p);
  }

  @HttpCode(204)
  @Delete(':id')
  // @UseGuards(AuthGuard('jwt'))
  async destroy(@Param('id') id) {
    await this.prescripcionEncabezadoService.delete(id);
    return;
  }
}
