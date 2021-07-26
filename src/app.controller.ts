import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Logger } from './utils/log4js';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    Logger.info("Hello")
    return this.appService.getHello();
  }
}
