import { Test, TestingModule } from '@nestjs/testing';
import { ViaAdministracionGateway } from './via-administracion.gateway';

describe('ViaAdministracionGateway', () => {
  let gateway: ViaAdministracionGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViaAdministracionGateway],
    }).compile();

    gateway = module.get<ViaAdministracionGateway>(ViaAdministracionGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
