import { Controller, Get, Post, Body } from '@nestjs/common';
import { Temperature } from './models/temperature';
@Controller('temperature')
export class TemperatureController {
  constructor() { }
  temp: Temperature = { value: 20 };
  @Post()
  async setTemperature(
    @Body()
    temp: Temperature): Promise<Temperature> {
    this.temp = temp;
    return this.temp;
  }
  @Get()
  async getTemperature(): Promise<Temperature> {
    return this.temp;
  }
}
