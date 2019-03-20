import { Test, TestingModule } from '@nestjs/testing';
import { ProductoNutricionalGateway } from './producto-nutricional.gateway';

describe('ProductoNutricionalGateway', () => {
  let gateway: ProductoNutricionalGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductoNutricionalGateway],
    }).compile();

    gateway = module.get<ProductoNutricionalGateway>(ProductoNutricionalGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
