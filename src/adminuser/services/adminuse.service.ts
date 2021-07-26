import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';
import { AdminUserEntity } from '../models/admin.user.enity';
import { AdminUser } from '../models/adminuser.interface';
import { Logger } from '@nestjs/common';



@Injectable()
export class AdminuseService {
  constructor(

    @InjectRepository(AdminUserEntity)
    private readonly adminUserRepository: Repository<AdminUserEntity>) { }

  createUser(adminuser: AdminUser): Observable<AdminUser> {
    Logger.log('info')
    return from(this.adminUserRepository.save(adminuser))
  }

  updateUser(id: number, adminuser: AdminUser): Observable<UpdateResult> {
    return from(this.adminUserRepository.update(id, adminuser))
  }

}
