import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import {DatabaseConfiguration} from 'config/database.configurations';
import { AdministratorService } from './services/administrator/administrator.service';







@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:DatabaseConfiguration.hostname,
      port:3306,
      username:DatabaseConfiguration.username,
      password:DatabaseConfiguration.password,
      database:DatabaseConfiguration.database,
      entities:[]
    })
  ],
  controllers:[AppController],
  providers:[AdministratorService]
  
})
export class AppModule {}
