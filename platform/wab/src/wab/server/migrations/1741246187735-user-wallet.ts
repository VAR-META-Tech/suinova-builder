import { MigrationInterface, QueryRunner } from "typeorm";

export class userWallet1741246187735 implements MigrationInterface {
  name = "userWallet1741246187735";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_wallet" ("id" text NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "createdById" text, "updatedById" text, "deletedById" text, "userId" text NOT NULL, "chainId" text NOT NULL, "walletAddress" text NOT NULL, CONSTRAINT "PK_b453ec3d9d579f6b9699be98beb" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_f470cbcba8c6dbdaf32ac0d426" ON "user_wallet" ("userId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a1c4d8895334fc18c8f2847ad8" ON "user_wallet" ("chainId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_aa52c421941015656bf82374dd" ON "user_wallet" ("userId", "chainId", "walletAddress") `
    );
    await queryRunner.query(
      `ALTER TABLE "user_wallet" ADD CONSTRAINT "FK_7fdcc902c7512832ca599852735" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user_wallet" ADD CONSTRAINT "FK_7725d036395b3b023072253b937" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user_wallet" ADD CONSTRAINT "FK_8c6193aba2ad857c8ced59647d8" FOREIGN KEY ("deletedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user_wallet" ADD CONSTRAINT "FK_f470cbcba8c6dbdaf32ac0d4267" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_wallet" DROP CONSTRAINT "FK_f470cbcba8c6dbdaf32ac0d4267"`
    );
    await queryRunner.query(
      `ALTER TABLE "user_wallet" DROP CONSTRAINT "FK_8c6193aba2ad857c8ced59647d8"`
    );
    await queryRunner.query(
      `ALTER TABLE "user_wallet" DROP CONSTRAINT "FK_7725d036395b3b023072253b937"`
    );
    await queryRunner.query(
      `ALTER TABLE "user_wallet" DROP CONSTRAINT "FK_7fdcc902c7512832ca599852735"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_aa52c421941015656bf82374dd"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_a1c4d8895334fc18c8f2847ad8"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_f470cbcba8c6dbdaf32ac0d426"`
    );
    await queryRunner.query(`DROP TABLE "user_wallet"`);
  }
}
