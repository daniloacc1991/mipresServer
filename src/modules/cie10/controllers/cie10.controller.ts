import { Controller, Get, UseGuards, Res, HttpStatus, HttpException, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { Cie10Service } from '../services/cie10.service';
import { AuthGuard } from '@nestjs/passport';
import { Cie10 } from '../entities/cie10.entity';

@ApiUseTags('CIE 10')
@ApiBearerAuth()
@Controller('cie10')
export class Cie10Controller {

  constructor(
    private cie10Service: Cie10Service,
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Res() res) {
    try {
      const elements = await this.cie10Service.findAll();
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
      const element = await this.cie10Service.findById(id);
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
  async create(@Body() cie10: Cie10, @Res() res) {
    try {
      const element = await this.cie10Service.create(cie10);
      res.status(HttpStatus.CREATED).json(element);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() cie10: Cie10, @Param('id') id: number, @Res() res) {
    try {
      const element = await this.cie10Service.update(id, cie10);
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
      await this.cie10Service.delete(id);
      res.status(HttpStatus.OK).json({});
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }
}
