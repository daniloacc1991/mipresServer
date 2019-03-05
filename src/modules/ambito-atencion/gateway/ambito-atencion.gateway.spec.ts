import { Test, TestingModule } from '@nestjs/testing';
import { AmbitoAtencionGateway } from './ambito-atencion.gateway';

describe('AmbitoAtencionGateway', () => {
  let gateway: AmbitoAtencionGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmbitoAtencionGateway],
    }).compile();

    gateway = module.get<AmbitoAtencionGateway>(AmbitoAtencionGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
