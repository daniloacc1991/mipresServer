import { Controller, UseGuards, Res, HttpStatus, HttpException, Param, Body, Logger } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { EntregaService } from '../services/entrega.service';
import { Entrega } from '../entities/entrega.entity';
import { EntregaMinSalud } from '../interface';

@ApiUseTags('Entrega')
@ApiBearerAuth()
@Controller('entrega')
export class EntregaController {

  constructor(
    private entregaService: EntregaService,
  ) { }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return await this.entregaService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findbyId(@Res() res, @Param('id') id: number) {
    try {
      const element = await this.entregaService.findById(id);
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
  async create(@Body() entrega: EntregaMinSalud, @Res() res) {
    try {
      const element = await this.entregaService.create(entrega);
      res.status(HttpStatus.CREATED).json(element);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('local')
  @UseGuards(AuthGuard('jwt'))
  async createLocal(@Body() entrega: Entrega, @Res() res) {
    try {
      const element = await this.entregaService.createLocal(entrega);
      res.status(HttpStatus.CREATED).json(element);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() entrega: Entrega, @Param('id') id: number, @Res() res) {
    try {
      const element = await this.entregaService.update(id, entrega);
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
      await this.entregaService.delete(id);
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
    try {
      return await this.entregaService.findPrescripcionDetalleById(id);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

}
