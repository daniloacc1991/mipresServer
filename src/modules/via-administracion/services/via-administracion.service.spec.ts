import { Test, TestingModule } from '@nestjs/testing';
import { ViaAdministracionService } from './via-administracion.service';

describe('ViaAdministracionService', () => {
  let service: ViaAdministracionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViaAdministracionService],
    }).compile();

    service = module.get<ViaAdministracionService>(ViaAdministracionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
