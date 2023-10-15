import {MigrationInterface, QueryRunner} from "typeorm";

export class Migration1697380355424 implements MigrationInterface {
    name = 'Migration1697380355424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tickets"
                                 (
                                     "id" SERIAL NOT NULL,
                                     CONSTRAINT "PK_343bc942ae261cf7a1377f48fd0" PRIMARY KEY ("id")
                                 )`);
        await queryRunner.query(`CREATE TABLE "ticket_types"
                                 (
                                     "id" SERIAL NOT NULL,
                                     CONSTRAINT "PK_5510ce7e18a4edc648c9fbfc283" PRIMARY KEY ("id")
                                 )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ticket_types"`);
        await queryRunner.query(`DROP TABLE "tickets"`);
    }

}
