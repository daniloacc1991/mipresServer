import { Test, TestingModule } from '@nestjs/testing';
import { AmbitoAtencionController } from './ambito-atencion.controller';

describe('AmbitoAtencion Controller', () => {
  let controller: AmbitoAtencionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmbitoAtencionController],
    }).compile();

    controller = module.get<AmbitoAtencionController>(AmbitoAtencionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
