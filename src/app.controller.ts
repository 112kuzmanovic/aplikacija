import { Controller, Get } from '@nestjs/common';
import { Administrator } from 'entities/administrator.entity';
import { get } from 'http';
import { AdministratorService } from './services/administrator/administrator.service';



@Controller()
export class AppController {
  constructor(
    private administratorService:AdministratorService
  ){

  }

  @Get()
  getIndex(): string {
    return "Home page!!!"
  }
  @Get ('api/administrator')
  getAllAdmins():Promise<Administrator[]>{
    return this.administratorService.getAll();

  }
}
