import { Controller, UseGuards, Res, Param, HttpStatus, HttpException, Body, Logger } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { PrescripcionDetalleService } from '../services/prescripcion-detalle.service';
import { PrescripcionDetalle } from '../entities/prescripcion-detalle.entity';

@ApiUseTags('Prescripcion Detalle')
@ApiBearerAuth()
@Controller('prescripcion-detalle')
export class PrescripcionDetalleController {

  constructor(
    private prescripcionDetalleService: PrescripcionDetalleService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Res() res) {
    try {
      const elements = await this.prescripcionDetalleService.findAll();
      if (elements.length > 0) {
        res.status(HttpStatus.OK).json(elements);
      } else {
        res.status(HttpStatus.NO_CONTENT).json([]);
      }
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('junta/:perPage/:page/:juntaId')
  @UseGuards(AuthGuard('jwt'))
  async findAllIdJunta(@Param('perPage') perPage: number, @Param('page') page: number, @Param('juntaId') juntaId: number) {
    return await this.prescripcionDetalleService.findByJuntaId(perPage, page, juntaId);
  }

  @Get('entregas')
  @UseGuards(AuthGuard('jwt'))
  async entregas() {
    Logger.log('Paso por el controlador');
    try {
      return await this.prescripcionDetalleService.entregas();
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findbyId(@Res() res, @Param('id') id: number) {
    try {
      const element = await this.prescripcionDetalleService.findById(id);
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
  async create(@Body() prescripcionDetalle: PrescripcionDetalle, @Res() res) {
    try {
      const element = await this.prescripcionDetalleService.create(prescripcionDetalle);
      res.status(HttpStatus.CREATED).json(element);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() prescripcionDetalle: PrescripcionDetalle, @Param('id') id: number, @Res() res) {
    try {
      const element = await this.prescripcionDetalleService.update(id, prescripcionDetalle);
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
      await this.prescripcionDetalleService.delete(id);
      res.status(HttpStatus.OK).json({});
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

}
