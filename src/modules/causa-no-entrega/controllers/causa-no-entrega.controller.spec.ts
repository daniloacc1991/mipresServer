import { Test, TestingModule } from '@nestjs/testing';
import { CausaNoEntregaController } from './causa-no-entrega.controller';

describe('CausaNoEntrega Controller', () => {
  let controller: CausaNoEntregaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CausaNoEntregaController],
    }).compile();

    controller = module.get<CausaNoEntregaController>(CausaNoEntregaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
