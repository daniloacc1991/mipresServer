import { Controller, UseGuards, Res, Param, HttpStatus, HttpException, Body } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ProductoNutricionalViaAdminService } from '../services/producto-nutricional-via-admin.service';
import { ProductoNutricionalViaAdmin } from '../entities/producto-nutricional-via-admin.entity';

@ApiUseTags('Prudcto Nutricional Via Admin')
@ApiBearerAuth()
@Controller('producto-nutricional-via-admin')
export class ProductoNutricionalViaAdminController {

  constructor(
    private productoNutricionalViaAdminService: ProductoNutricionalViaAdminService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Res() res) {
    try {
      const elements = await this.productoNutricionalViaAdminService.findAll();
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
      const element = await this.productoNutricionalViaAdminService.findById(id);
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
  async create(@Body() productoNutricionalViaAdmin: ProductoNutricionalViaAdmin, @Res() res) {
    try {
      const element = await this.productoNutricionalViaAdminService.create(productoNutricionalViaAdmin);
      res.status(HttpStatus.CREATED).json(element);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() productoNutricionalViaAdmin: ProductoNutricionalViaAdmin, @Param('id') id: number, @Res() res) {
    try {
      const element = await this.productoNutricionalViaAdminService.update(id, productoNutricionalViaAdmin);
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
      await this.productoNutricionalViaAdminService.delete(id);
      res.status(HttpStatus.OK).json({});
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }
}
