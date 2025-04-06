import { Entity, Column, PrimaryGeneratedColumn, Index, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("nft_collections")
@Index("idx_nft_collections_project_id", ["projectId"])
export class NftCollection {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "project_id", type: "varchar" })
  projectId: string;

  @Column({ name: "package_id", type: "varchar" })
  packageId: string;

  @Column({ name: "collection_id", type: "varchar" })
  collectionId: string;

  @Column({ name: "name", type: "varchar", nullable: true })
  name: string;

  @Column({ name: "description", type: "text", nullable: true })
  description: string | null;

  @Column({ name: "creator_address", type: "varchar" })
  creatorAddress: string;

  @Column({ name: "collection_type", type: "varchar" })
  collectionType: string;

  @Column({ name: "royalty_fee", type: "decimal", precision: 5, scale: 2 })
  royaltyFee: number;

  @Column({ name: "is_active", type: "boolean", default: true })
  isActive: boolean;

  @Column({ name: "metadata", type: "jsonb", nullable: true })
  metadata: Record<string, any> | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
} 