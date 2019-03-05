import { Test, TestingModule } from '@nestjs/testing';
import { AmbitoAtencionService } from './ambito-atencion.service';

describe('AmbitoAtencionService', () => {
  let service: AmbitoAtencionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmbitoAtencionService],
    }).compile();

    service = module.get<AmbitoAtencionService>(AmbitoAtencionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
