import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

// Load dot environment before load other modules
import dotenv = require('dotenv');
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TimeoutInterceptor } from './timeout.interceptor';
import { CatsModule } from './cats/cats.module';

const { parsed } = dotenv.config({
  path:
    process.cwd() +
    '/.env' +
    (process.env.NODE_ENV ? '.' + process.env.NODE_ENV : ''),
});
process.env = { ...process.env, ...parsed };

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/' + process.env.MONGODB_DATABASE),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useValue: TimeoutInterceptor,
    },
    AppService,
  ],
})
export class AppModule {}
