import { Controller, UseGuards, Res, Param, HttpStatus, HttpException, Body } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ProductoNutricionalService } from '../services/producto-nutricional.service';
import { ProductoNutricional } from '../entities/producto-nutricional.entity';

@ApiUseTags('Prudcto Nutricional')
@ApiBearerAuth()
@Controller('producto-nutricional')
export class ProductoNutricionalController {

  constructor(
    private productoNutricionalService: ProductoNutricionalService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Res() res) {
    try {
      const elements = await this.productoNutricionalService.findAll();
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
      const element = await this.productoNutricionalService.findById(id);
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
  async create(@Body() productoNutricional: ProductoNutricional, @Res() res) {
    try {
      const element = await this.productoNutricionalService.create(productoNutricional);
      res.status(HttpStatus.CREATED).json(element);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() productoNutricional: ProductoNutricional, @Param('id') id: number, @Res() res) {
    try {
      const element = await this.productoNutricionalService.update(id, productoNutricional);
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
      await this.productoNutricionalService.delete(id);
      res.status(HttpStatus.OK).json({});
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }
}
