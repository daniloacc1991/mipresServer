import { Test, TestingModule } from '@nestjs/testing';
import { EstadoJuntaProfesionalController } from './estado-junta-profesional.controller';

describe('EstadoJuntaProfesional Controller', () => {
  let controller: EstadoJuntaProfesionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadoJuntaProfesionalController],
    }).compile();

    controller = module.get<EstadoJuntaProfesionalController>(EstadoJuntaProfesionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
