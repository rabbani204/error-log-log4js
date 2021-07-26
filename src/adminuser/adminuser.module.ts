import { Module } from '@nestjs/common';
import { AdminuseService } from './services/adminuse.service';
import { AdminuseController } from './controllers/adminuse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminUserEntity } from './models/admin.user.enity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminUserEntity])
  ],
  providers: [AdminuseService],
  controllers: [AdminuseController]
})
export class AdminuserModule {}
