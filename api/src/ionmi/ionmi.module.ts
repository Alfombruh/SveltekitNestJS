import { Module } from '@nestjs/common';
import { IonmiService } from './ionmi.service';
import { IonmiController } from './ionmi.controller';

@Module({
  controllers: [IonmiController],
  providers: [IonmiService]
})
export class IonmiModule {}
