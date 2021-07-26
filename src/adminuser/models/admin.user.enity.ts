import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('adminuser')
export class AdminUserEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
  
  @Column()
  mobile: string

  @Column()
  password: string
}