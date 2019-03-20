import { Test, TestingModule } from '@nestjs/testing';
import { TipoServicioComplementarioController } from './tipo-servicio-complementario.controller';

describe('TipoServicioComplementario Controller', () => {
  let controller: TipoServicioComplementarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoServicioComplementarioController],
    }).compile();

    controller = module.get<TipoServicioComplementarioController>(TipoServicioComplementarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
