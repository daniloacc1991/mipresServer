import { Controller, UseGuards, Res, Param, HttpStatus, HttpException, Body } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ViaAdministracionService } from '../services/via-administracion.service';
import { ViaAdministracion } from '../entities/via-administracion.entity';

@ApiUseTags('Via Administracion')
@ApiBearerAuth()
@Controller('via-administracion')
export class ViaAdministracionController {

  constructor(
    private viaAdministracionService: ViaAdministracionService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Res() res) {
    try {
      const elements = await this.viaAdministracionService.findAll();
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

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findbyId(@Res() res, @Param('id') id: number) {
    try {
      const element = await this.viaAdministracionService.findById(id);
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
  async create(@Body() viaAdministracion: ViaAdministracion, @Res() res) {
    try {
      const element = await this.viaAdministracionService.create(viaAdministracion);
      res.status(HttpStatus.CREATED).json(element);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() viaAdministracion: ViaAdministracion, @Param('id') id: number, @Res() res) {
    try {
      const element = await this.viaAdministracionService.update(id, viaAdministracion);
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
      await this.viaAdministracionService.delete(id);
      res.status(HttpStatus.OK).json({});
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }
}
