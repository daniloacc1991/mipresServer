import { Test, TestingModule } from '@nestjs/testing';
import { FrecuenciaGateway } from './frecuencia.gateway';

describe('FrecuenciaGateway', () => {
  let gateway: FrecuenciaGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrecuenciaGateway],
    }).compile();

    gateway = module.get<FrecuenciaGateway>(FrecuenciaGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
