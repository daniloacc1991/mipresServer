import { Test, TestingModule } from '@nestjs/testing';
import { TipoDispositivoMedicoGateway } from './tipo-dispositivo-medico.gateway';

describe('TipoDispositivoMedicoGateway', () => {
  let gateway: TipoDispositivoMedicoGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoDispositivoMedicoGateway],
    }).compile();

    gateway = module.get<TipoDispositivoMedicoGateway>(TipoDispositivoMedicoGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
