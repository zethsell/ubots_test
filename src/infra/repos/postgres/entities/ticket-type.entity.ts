import {Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity("ticket_types")
export class TicketTypeEntity {

    @PrimaryGeneratedColumn()
    id!: number

}
