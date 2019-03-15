import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  async findAll() {
    const port = process.env.PORT;
    return `Escuchando por el Puerto ${port}`;
  }
}
