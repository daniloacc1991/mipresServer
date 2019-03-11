import { Controller, UseGuards, Res, HttpStatus, HttpException, Param, Body } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { IndicacionEspecialService } from '../services/indicacion-especial.service';
import { AuthGuard } from '@nestjs/passport';
import { IndicacionEspecial } from '../entities/indicacion-especial';

@ApiUseTags('Indicacion Especial')
@ApiBearerAuth()
@Controller('indicacion-especial')
export class IndicacionEspecialController {

  constructor(
    private indicacionEspecialService: IndicacionEspecialService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Res() res) {
    try {
      const elements = await this.indicacionEspecialService.findAll();
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
      const element = await this.indicacionEspecialService.findById(id);
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
  async create(@Body() indicacionEspecial: IndicacionEspecial, @Res() res) {
    try {
      const element = await this.indicacionEspecialService.create(indicacionEspecial);
      res.status(HttpStatus.CREATED).json(element);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() indicacionEspecial: IndicacionEspecial, @Param('id') id: number, @Res() res) {
    try {
      const element = await this.indicacionEspecialService.update(id, indicacionEspecial);
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
      await this.indicacionEspecialService.delete(id);
      res.status(HttpStatus.OK).json({});
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }
}
