import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IonmiModule } from './ionmi/ionmi.module';

@Module({
  imports: [IonmiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
