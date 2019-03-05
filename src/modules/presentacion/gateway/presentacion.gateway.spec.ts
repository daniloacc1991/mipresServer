import { Test, TestingModule } from '@nestjs/testing';
import { PresentacionGateway } from './presentacion.gateway';

describe('PresentacionGateway', () => {
  let gateway: PresentacionGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PresentacionGateway],
    }).compile();

    gateway = module.get<PresentacionGateway>(PresentacionGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
