import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AdminUser } from '../models/adminuser.interface';
import { AdminuseService } from '../services/adminuse.service';

@Controller('adminuse')
export class AdminuseController {
  constructor(private adminuseService: AdminuseService) {
    
  }
  @Post()
  create(@Body() user: AdminUser): Observable<AdminUser> {
    return this.adminuseService.createUser(user)
  }
}
