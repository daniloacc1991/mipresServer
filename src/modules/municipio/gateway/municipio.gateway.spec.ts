import { Test, TestingModule } from '@nestjs/testing';
import { MunicipioGateway } from './municipio.gateway';

describe('MunicipioGateway', () => {
  let gateway: MunicipioGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MunicipioGateway],
    }).compile();

    gateway = module.get<MunicipioGateway>(MunicipioGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
