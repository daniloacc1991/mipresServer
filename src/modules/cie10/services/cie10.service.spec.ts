import { Test, TestingModule } from '@nestjs/testing';
import { Cie10Service } from './cie10.service';

describe('Cie10Service', () => {
  let service: Cie10Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Cie10Service],
    }).compile();

    service = module.get<Cie10Service>(Cie10Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
