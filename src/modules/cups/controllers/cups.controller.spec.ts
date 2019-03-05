import { Test, TestingModule } from '@nestjs/testing';
import { CupsController } from './cups.controller';

describe('Cups Controller', () => {
  let controller: CupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CupsController],
    }).compile();

    controller = module.get<CupsController>(CupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
