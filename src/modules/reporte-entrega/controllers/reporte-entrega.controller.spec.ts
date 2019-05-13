import { Test, TestingModule } from '@nestjs/testing';
import { ReporteEntregaController} from './reporte-entrega.controller';

describe('ReporteEntrega Controller', () => {
  let controller: ReporteEntregaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReporteEntregaController],
    }).compile();

    controller = module.get<ReporteEntregaController>(ReporteEntregaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
