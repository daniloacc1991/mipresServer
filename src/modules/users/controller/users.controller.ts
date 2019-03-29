import { Controller, UseGuards, Res, Param, HttpStatus, HttpException, Body, Req } from '@nestjs/common';
import { Get, Post, Put, Delete, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from '../service/users.service';
import { User } from '../entities/user.entity';
import { ChangePasswordInterface } from '../interfaces';

@ApiUseTags('Usuarios')
@ApiBearerAuth()
@Controller('user')
export class UsersController {

  constructor(
    private usersService: UsersService,
  ) { }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Res() res) {
    try {
      const elements = await this.usersService.findAll();
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
      const element = await this.usersService.findById(id);
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
  async create(@Body() users: User, @Res() res) {
    try {
      const element = await this.usersService.create(users);
      res.status(HttpStatus.CREATED).json(element);
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() users: User, @Param('id') id: number, @Res() res) {
    try {
      const element = await this.usersService.update(id, users);
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
      await this.usersService.delete(id);
      res.status(HttpStatus.OK).json({});
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Patch('change-password')
  @UseGuards(AuthGuard('jwt'))
  async changePassword(@Body() newPassword: ChangePasswordInterface, @Req() req, @Res() res) {
    try {
      await this.usersService.changePassword(req.user, newPassword.password);
      res.status(HttpStatus.OK).json({ msg: 'Contraseña cambiada exitosamente' });
    } catch (e) {
      throw new HttpException({
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }
  }
}
