import { Controller, UseGuards, Res, HttpStatus, Body, Post, Get, Param, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../service/auth.service';
import { Auth } from '../interfaces/auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('singIn')
  async singIn(@Body() auth: Auth, @Res() res) {
    const rows = await this.authService.singIn(auth);
    res.status(HttpStatus.OK).json({ token: rows });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('menu/:system')
  async menu(@Param('system') system: string, @Req() req, @Res() res) {
    const items = await this.authService.menu(system, req.user.usuario);
    if (items.length > 0) {
      res.status(HttpStatus.OK).json(items);
    } else {
      res.status(HttpStatus.NO_CONTENT).json({});
    }
  }

}
