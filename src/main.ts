// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { LoggerMiddleware } from './middleware/logger.middleware';
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.json()); // For parsing application/json
  app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
     // Monitor all request routes and print logs
  // app.use(LoggerMiddleware);
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
 