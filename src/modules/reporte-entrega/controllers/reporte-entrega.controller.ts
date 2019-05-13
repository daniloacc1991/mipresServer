import { Controller, UseGuards, Res, HttpStatus, HttpException, Param, Body } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { ReporteEntregaService } from '../services/reporte-entrega.service';
import { AuthGuard } from '@nestjs/passport';
import { ReporteEntrega } from '../entities/reporte-entrega.entity';

@ApiUseTags('Reporte Entrega')
@ApiBearerAuth()
@Controller('reporte-entrega')
export class ReporteEntregaController {

  constructor(
    private reporteEntregaService: ReporteEntregaService,
  ) { }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return await this.reporteEntregaService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findbyId(@Res() res, @Param('id') id: number) {
    try {
      const element = await this.reporteEntregaService.findById(id);
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
  async create(@Body() reporteEntrega: ReporteEntrega, @Res() res) {
    try {
      const element = await this.reporteEntregaService.create(reporteEntrega);
      res.status(HttpStatus.CREATED).json(element);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() reporteEntrega: ReporteEntrega, @Param('id') id: number, @Res() res) {
    try {
      const element = await this.reporteEntregaService.update(id, reporteEntrega);
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
      await this.reporteEntregaService.delete(id);
      res.status(HttpStatus.OK).json({});
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('detalle/:id')
  @UseGuards(AuthGuard('jwt'))
  async findPrescripcionDetalleById(@Param('id') id: number) {
    // return await this.reporteEntregaService.findPrescripcionDetalleById(id);
  }

}
