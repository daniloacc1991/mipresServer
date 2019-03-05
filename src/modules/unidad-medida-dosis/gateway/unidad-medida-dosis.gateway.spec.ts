import { Test, TestingModule } from '@nestjs/testing';
import { UnidadMedidaDosisGateway } from './unidad-medida-dosis.gateway';

describe('UnidadMedidaDosisGateway', () => {
  let gateway: UnidadMedidaDosisGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnidadMedidaDosisGateway],
    }).compile();

    gateway = module.get<UnidadMedidaDosisGateway>(UnidadMedidaDosisGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
