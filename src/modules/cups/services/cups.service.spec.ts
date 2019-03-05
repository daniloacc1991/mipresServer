import { Test, TestingModule } from '@nestjs/testing';
import { CupsService } from './cups.service';

describe('CupsService', () => {
  let service: CupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CupsService],
    }).compile();

    service = module.get<CupsService>(CupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
