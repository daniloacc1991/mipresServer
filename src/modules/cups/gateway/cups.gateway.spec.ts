import { Test, TestingModule } from '@nestjs/testing';
import { CupsGateway } from './cups.gateway';

describe('CupsGateway', () => {
  let gateway: CupsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CupsGateway],
    }).compile();

    gateway = module.get<CupsGateway>(CupsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
