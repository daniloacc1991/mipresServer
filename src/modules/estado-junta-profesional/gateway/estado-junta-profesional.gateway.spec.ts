import { Test, TestingModule } from '@nestjs/testing';
import { EstadoJuntaProfesionalGateway } from './estado-junta-profesional.gateway';

describe('EstadoJuntaProfesionalGateway', () => {
  let gateway: EstadoJuntaProfesionalGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadoJuntaProfesionalGateway],
    }).compile();

    gateway = module.get<EstadoJuntaProfesionalGateway>(EstadoJuntaProfesionalGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
