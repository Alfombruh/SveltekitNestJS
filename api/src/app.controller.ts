import { Controller, Get, Redirect, Header} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  @Redirect('http://localhost:5173', 307)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/test")
  @Header("SexoType"," sexo")
  testing(): string {
    return this.appService.retTest("Pongo aqui cosas");
  }
}
