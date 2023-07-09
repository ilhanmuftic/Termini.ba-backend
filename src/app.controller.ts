import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Termin } from './termin.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTermins(): Termin[] {
    return this.appService.getTermins();
  }
}
