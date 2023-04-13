import { Test, TestingModule } from '@nestjs/testing';
import { IonmiService } from './ionmi.service';

describe('IonmiService', () => {
  let service: IonmiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IonmiService],
    }).compile();

    service = module.get<IonmiService>(IonmiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
