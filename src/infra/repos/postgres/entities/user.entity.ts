import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { TicketEntity } from '.'

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name?: string

  @Column({ default: 'general' })
  team?: 'CARD' | 'LOAN' | 'OTHER'

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updated?: Date

  @DeleteDateColumn({ select: false, name: 'deleted_at' })
  deleteAt?: Date

  @OneToMany(() => TicketEntity, (tickets: TicketEntity) => tickets.user, { eager: true })
  tickets: TicketEntity[] | undefined
}
