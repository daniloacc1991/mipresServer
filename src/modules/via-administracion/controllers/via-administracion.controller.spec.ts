import { Test, TestingModule } from '@nestjs/testing';
import { ViaAdministracionController } from './via-administracion.controller';

describe('ViaAdministracion Controller', () => {
  let controller: ViaAdministracionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ViaAdministracionController],
    }).compile();

    controller = module.get<ViaAdministracionController>(ViaAdministracionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
