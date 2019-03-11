import { Test, TestingModule } from '@nestjs/testing';
import { IndicacionEspecialGateway } from './indicacion-especial.gateway';

describe('IndicacionEspecialGateway', () => {
  let gateway: IndicacionEspecialGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndicacionEspecialGateway],
    }).compile();

    gateway = module.get<IndicacionEspecialGateway>(IndicacionEspecialGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
