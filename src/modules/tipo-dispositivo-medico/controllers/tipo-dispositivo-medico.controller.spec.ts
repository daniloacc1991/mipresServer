import { Test, TestingModule } from '@nestjs/testing';
import { TipoDispositivoMedicoController } from './tipo-dispositivo-medico.controller';

describe('TipoDispositivoMedico Controller', () => {
  let controller: TipoDispositivoMedicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoDispositivoMedicoController],
    }).compile();

    controller = module.get<TipoDispositivoMedicoController>(TipoDispositivoMedicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
