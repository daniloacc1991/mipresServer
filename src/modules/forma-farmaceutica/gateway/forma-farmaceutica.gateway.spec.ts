import { Test, TestingModule } from '@nestjs/testing';
import { FormaFarmaceuticaGateway } from './forma-farmaceutica.gateway';

describe('FormaFarmaceuticaGateway', () => {
  let gateway: FormaFarmaceuticaGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormaFarmaceuticaGateway],
    }).compile();

    gateway = module.get<FormaFarmaceuticaGateway>(FormaFarmaceuticaGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
