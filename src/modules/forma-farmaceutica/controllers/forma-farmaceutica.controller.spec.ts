import { Test, TestingModule } from '@nestjs/testing';
import { FormaFarmaceuticaController } from './forma-farmaceutica.controller';

describe('FormaFarmaceutica Controller', () => {
  let controller: FormaFarmaceuticaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormaFarmaceuticaController],
    }).compile();

    controller = module.get<FormaFarmaceuticaController>(FormaFarmaceuticaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
