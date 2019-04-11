import { Test, TestingModule } from '@nestjs/testing';
import { MedicamentoPrincipioActivoGateway } from './medicamento-principio-activo.gateway';

describe('MedicamentoPrincipioActivoGateway', () => {
  let gateway: MedicamentoPrincipioActivoGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicamentoPrincipioActivoGateway],
    }).compile();

    gateway = module.get<MedicamentoPrincipioActivoGateway>(MedicamentoPrincipioActivoGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
