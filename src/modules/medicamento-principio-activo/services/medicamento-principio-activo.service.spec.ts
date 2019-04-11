import { Test, TestingModule } from '@nestjs/testing';
import { MedicamentoPrincipioActivoService } from './medicamento-principio-activo.service';

describe('MedicamentoPrincipioActivoService', () => {
  let service: MedicamentoPrincipioActivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicamentoPrincipioActivoService],
    }).compile();

    service = module.get<MedicamentoPrincipioActivoService>(MedicamentoPrincipioActivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
