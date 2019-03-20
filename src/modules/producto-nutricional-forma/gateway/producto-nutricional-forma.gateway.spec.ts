import { Test, TestingModule } from '@nestjs/testing';
import { ProductoNutricionalFormaGateway } from './producto-nutricional-forma.gateway';

describe('ProductoNutricionalFormaGateway', () => {
  let gateway: ProductoNutricionalFormaGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductoNutricionalFormaGateway],
    }).compile();

    gateway = module.get<ProductoNutricionalFormaGateway>(ProductoNutricionalFormaGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
