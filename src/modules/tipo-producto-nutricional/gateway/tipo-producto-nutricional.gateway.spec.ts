import { Test, TestingModule } from '@nestjs/testing';
import { TipoProductoNutricionalGateway } from './tipo-producto-nutricional.gateway';

describe('TipoProductoNutricionalGateway', () => {
  let gateway: TipoProductoNutricionalGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoProductoNutricionalGateway],
    }).compile();

    gateway = module.get<TipoProductoNutricionalGateway>(TipoProductoNutricionalGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
