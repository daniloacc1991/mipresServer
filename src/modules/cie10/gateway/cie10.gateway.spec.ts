import { Test, TestingModule } from '@nestjs/testing';
import { Cie10Gateway } from './cie10.gateway';

describe('Cie10Gateway', () => {
  let gateway: Cie10Gateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Cie10Gateway],
    }).compile();

    gateway = module.get<Cie10Gateway>(Cie10Gateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
