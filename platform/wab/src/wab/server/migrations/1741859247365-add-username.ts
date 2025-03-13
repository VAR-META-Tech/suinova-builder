import { MigrationInterface, QueryRunner } from "typeorm";

export class addUsername1741859247365 implements MigrationInterface {
  name = "addUsername1741859247365";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" ADD "username" text`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
  }
}
