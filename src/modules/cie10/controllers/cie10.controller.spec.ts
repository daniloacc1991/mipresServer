import { Test, TestingModule } from '@nestjs/testing';
import { Cie10Controller } from './cie10.controller';

describe('Cie10 Controller', () => {
  let controller: Cie10Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Cie10Controller],
    }).compile();

    controller = module.get<Cie10Controller>(Cie10Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
