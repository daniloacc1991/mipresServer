import { Controller, UseGuards, Res, Param, HttpStatus, HttpException, Body } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { AmbitoAtencionService } from '../service/ambito-atencion.service';
import { AuthGuard } from '@nestjs/passport';
import { AmbitoAtencion } from '../entities/ambito-atencion.entity';

@ApiUseTags('Ambito Atencion')
@ApiBearerAuth()
@Controller('ambito-atencion')
export class AmbitoAtencionController {
  constructor(
    private ambitoAtencionService: AmbitoAtencionService,
  ) { }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Res() res) {
    try {
      const elements = await this.ambitoAtencionService.findAll();
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
      const element = await this.ambitoAtencionService.findById(id);
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
  async create(@Body() ambitoAtencion: AmbitoAtencion, @Res() res) {
    try {
      const element = await this.ambitoAtencionService.create(ambitoAtencion);
      res.status(HttpStatus.CREATED).json(element);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() ambitoAtencion: AmbitoAtencion, @Param('id') id: number, @Res() res) {
    try {
      const element = await this.ambitoAtencionService.update(id, ambitoAtencion);
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
      await this.ambitoAtencionService.delete(id);
      res.status(HttpStatus.OK).json({});
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }
}
