import { Controller, Get } from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { Cie10Service } from '../services/cie10.service';

@ApiUseTags('CIE 10')
@ApiBearerAuth()
@Controller('cie10')
export class Cie10Controller {

  constructor(
    private cie10Service: Cie10Service,
  ) {}

  @Get()
  async findAll() {
    return await this.cie10Service.findAll();
  }
}
