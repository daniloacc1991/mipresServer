import { Test, TestingModule } from '@nestjs/testing';
import { EntregaGateway } from './entrega.gateway';

describe('EntregaGateway', () => {
  let gateway: EntregaGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntregaGateway],
    }).compile();

    gateway = module.get<EntregaGateway>(EntregaGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
