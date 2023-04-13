import { Test, TestingModule } from '@nestjs/testing';
import { IonmiController } from './ionmi.controller';
import { IonmiService } from './ionmi.service';

describe('IonmiController', () => {
  let controller: IonmiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IonmiController],
      providers: [IonmiService],
    }).compile();

    controller = module.get<IonmiController>(IonmiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
