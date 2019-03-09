import { Injectable, Inject } from '@nestjs/common';
import { Cie10 } from '../entities/cie10.entity';

@Injectable()
export class Cie10Service {
  constructor(
    @Inject('Cie10Repository') private readonly cie10Repository: typeof Cie10,
  ) { }

  async findAll() {
    return await this.cie10Repository.findAll();
  }
}
