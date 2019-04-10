import { Test, TestingModule } from '@nestjs/testing';
import { CausaNoEntregaTipoTecnologiaController } from './causa-no-entrega-tipo-tecnologia.controller';

describe('CausaNoEntregaTipoProcedimiento Controller', () => {
  let controller: CausaNoEntregaTipoTecnologiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CausaNoEntregaTipoTecnologiaController],
    }).compile();

    controller = module.get<CausaNoEntregaTipoTecnologiaController>(CausaNoEntregaTipoTecnologiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
