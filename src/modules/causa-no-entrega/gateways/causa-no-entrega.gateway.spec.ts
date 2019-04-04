import { Test, TestingModule } from '@nestjs/testing';
import { CausaNoEntregaGateway } from './causa-no-entrega.gateway';

describe('CausaNoEntregaGateway', () => {
  let gateway: CausaNoEntregaGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CausaNoEntregaGateway],
    }).compile();

    gateway = module.get<CausaNoEntregaGateway>(CausaNoEntregaGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
