import { Controller, UseGuards, Res, HttpStatus, HttpException, Param, Body } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CausaNoEntregaService } from '../services/causa-no-entrega.service';
import { CausaNoEntrega } from '../entities/causa-no-entrega.entity';

@ApiUseTags('Causa No Entrega')
@ApiBearerAuth()
@Controller('causa-no-entrega')
export class CausaNoEntregaController {

  constructor(
    private causaNoEntregaService: CausaNoEntregaService,
  ) { }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return await this.causaNoEntregaService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findbyId(@Res() res, @Param('id') id: number) {
    try {
      const element = await this.causaNoEntregaService.findById(id);
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
  async create(@Body() causaNoEntrega: CausaNoEntrega, @Res() res) {
    try {
      const element = await this.causaNoEntregaService.create(causaNoEntrega);
      res.status(HttpStatus.CREATED).json(element);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() causaNoEntrega: CausaNoEntrega, @Param('id') id: number, @Res() res) {
    try {
      const element = await this.causaNoEntregaService.update(id, causaNoEntrega);
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
      await this.causaNoEntregaService.delete(id);
      res.status(HttpStatus.OK).json({});
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

}
