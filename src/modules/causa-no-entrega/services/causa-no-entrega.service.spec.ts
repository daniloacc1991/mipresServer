import { Test, TestingModule } from '@nestjs/testing';
import { CausaNoEntregaService } from './causa-no-entrega.service';

describe('CausaNoEntregaService', () => {
  let service: CausaNoEntregaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CausaNoEntregaService],
    }).compile();

    service = module.get<CausaNoEntregaService>(CausaNoEntregaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
