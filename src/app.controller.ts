import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Temperature } from './models/temperature';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  temp: Temperature = {value:20};
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}


