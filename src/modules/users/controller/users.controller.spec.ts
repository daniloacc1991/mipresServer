import { Test, TestingModule } from '@nestjs/testing';
import { User } from './user.controller';

describe('User.Controller.Ts Controller', () => {
  let controller: User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User],
    }).compile();

    controller = module.get<User>(User);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
