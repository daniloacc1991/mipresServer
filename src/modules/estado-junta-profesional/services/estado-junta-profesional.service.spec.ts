import { Test, TestingModule } from '@nestjs/testing';
import { EstadoJuntaProfesionalService } from './estado-junta-profesional.service';

describe('EstadoJuntaProfesionalService', () => {
  let service: EstadoJuntaProfesionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadoJuntaProfesionalService],
    }).compile();

    service = module.get<EstadoJuntaProfesionalService>(EstadoJuntaProfesionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
