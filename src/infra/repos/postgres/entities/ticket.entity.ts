import {Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity('tickets')
export class TicketEntity {

    @PrimaryGeneratedColumn()
    id!: number

}
