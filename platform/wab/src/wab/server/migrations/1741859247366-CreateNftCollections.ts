import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateNftCollections1742000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "nft_collections",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "projectId",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "packageId",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "collectionId",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "description",
            type: "text",
            isNullable: true,
          },
          {
            name: "creatorAddress",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "collectionType",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "royaltyFee",
            type: "decimal",
            precision: 5,
            scale: 2,
            isNullable: false,
            default: "0.00",
          },
          {
            name: "isActive",
            type: "boolean",
            default: true,
            isNullable: false,
          },
          {
            name: "metadata",
            type: "jsonb",
            isNullable: true,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            isNullable: false,
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            isNullable: false,
          },
        ],
      }),
      true
    );

    // Create indexes for better query performance
    await queryRunner.createIndex(
      "nft_collections",
      new TableIndex({
        name: "idx_nft_collections_project_id",
        columnNames: ["projectId"],
      })
    );

    await queryRunner.createIndex(
      "nft_collections",
      new TableIndex({
        name: "idx_nft_collections_creator_address",
        columnNames: ["creatorAddress"],
      })
    );

    await queryRunner.createIndex(
      "nft_collections",
      new TableIndex({
        name: "idx_nft_collections_collection_id",
        columnNames: ["collectionId"],
      })
    );

    await queryRunner.createIndex(
      "nft_collections",
      new TableIndex({
        name: "idx_nft_collections_collection_type",
        columnNames: ["collectionType"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex("nft_collections", "idx_nft_collections_creator_address");
    await queryRunner.dropIndex("nft_collections", "idx_nft_collections_collection_id");
    await queryRunner.dropIndex("nft_collections", "idx_nft_collections_collection_type");
    await queryRunner.dropIndex("nft_collections", "idx_nft_collections_project_id");
    await queryRunner.dropTable("nft_collections");
  }
} 