import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { UserEntity } from '.'

@Entity('tickets')
export class TicketEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  identifier?: string

  @Column({ default: 'general' })
  subject?: string

  @Column({ nullable: true, name: 'closed_at' })
  closedAt?: Date

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date

  @DeleteDateColumn({ select: false, name: 'deleted_at' })
  deleteAt?: Date

  @ManyToOne(() => UserEntity, { nullable: true })
  user?: UserEntity | null
}
