import { MigrationInterface, QueryRunner } from 'typeorm'

export class Migration1697476822535 implements MigrationInterface {
  name = 'Migration1697476822535'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "users"
                             (
                               "id"         SERIAL            NOT NULL,
                               "name"       character varying NOT NULL,
                               "team"       character varying NOT NULL DEFAULT 'general',
                               "created_at" TIMESTAMP         NOT NULL DEFAULT now(),
                               "updated_at" TIMESTAMP                  DEFAULT now(),
                               "deleted_at" TIMESTAMP,
                               CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
                             )`)
    await queryRunner.query(`CREATE TABLE "tickets"
                             (
                               "id"         SERIAL            NOT NULL,
                               "identifier" character varying NOT NULL,
                               "subject"    character varying NOT NULL DEFAULT 'general',
                               "closed_at"  TIMESTAMP,
                               "created_at" TIMESTAMP         NOT NULL DEFAULT now(),
                               "updated_at" TIMESTAMP                  DEFAULT now(),
                               "deleted_at" TIMESTAMP,
                               "userId"     integer,
                               CONSTRAINT "UQ_b0e622a927a982f1f10df2fc7b7" UNIQUE ("identifier"),
                               CONSTRAINT "PK_343bc942ae261cf7a1377f48fd0" PRIMARY KEY ("id")
                             )`)
    await queryRunner.query(`ALTER TABLE "tickets"
      ADD CONSTRAINT "FK_4bb45e096f521845765f657f5c8" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "tickets"
      DROP CONSTRAINT "FK_4bb45e096f521845765f657f5c8"`)
    await queryRunner.query(`DROP TABLE "tickets"`)
    await queryRunner.query(`DROP TABLE "users"`)
  }
}
