import { Controller, UseGuards, Res, Param, HttpStatus, HttpException, Body } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { EstadoJuntaProfesionalService } from '../services/estado-junta-profesional.service';
import { EstadoJuntaProfesional } from '../entities/estado-junta-profesional.entity';

@ApiUseTags('Estado Junta Profesional')
@ApiBearerAuth()
@Controller('estado-junta-profesional')
export class EstadoJuntaProfesionalController {

  constructor(
    private estadoJuntaProfesionalService: EstadoJuntaProfesionalService,
  ) { }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return await this.estadoJuntaProfesionalService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findbyId(@Res() res, @Param('id') id: number) {
    try {
      const element = await this.estadoJuntaProfesionalService.findById(id);
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
  async create(@Body() estadoJuntaProfesional: EstadoJuntaProfesional, @Res() res) {
    try {
      const element = await this.estadoJuntaProfesionalService.create(estadoJuntaProfesional);
      res.status(HttpStatus.CREATED).json(element);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() estadoJuntaProfesional: EstadoJuntaProfesional, @Param('id') id: number, @Res() res) {
    try {
      const element = await this.estadoJuntaProfesionalService.update(id, estadoJuntaProfesional);
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
      await this.estadoJuntaProfesionalService.delete(id);
      res.status(HttpStatus.OK).json({});
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

}
