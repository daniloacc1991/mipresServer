import { Test, TestingModule } from '@nestjs/testing';
import { TipoServicioComplementarioGateway } from './tipo-servicio-complementario.gateway';

describe('TipoServicioComplementarioGateway', () => {
  let gateway: TipoServicioComplementarioGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoServicioComplementarioGateway],
    }).compile();

    gateway = module.get<TipoServicioComplementarioGateway>(TipoServicioComplementarioGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
