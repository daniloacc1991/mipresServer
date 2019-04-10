import { Test, TestingModule } from '@nestjs/testing';
import { CausaNoEntregaTipoTecnologiaGateway } from './causa-no-entrega-tipo-tecnologia.gateway';

describe('CausaNoEntregaTipoTecnologiaGateway', () => {
  let gateway: CausaNoEntregaTipoTecnologiaGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CausaNoEntregaTipoTecnologiaGateway],
    }).compile();

    gateway = module.get<CausaNoEntregaTipoTecnologiaGateway>(CausaNoEntregaTipoTecnologiaGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
