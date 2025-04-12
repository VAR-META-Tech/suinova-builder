import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("nft_collections")
@Index("idx_nft_collections_project_id", ["projectId"])
export class NftCollection {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "projectId", type: "varchar" })
  projectId: string;

  @Column({ name: "packageId", type: "varchar" })
  packageId: string;

  @Column({ name: "marketplaceId", type: "varchar", nullable: true })
  marketplaceId: string;

  @Column({ name: "collectionId", type: "varchar" })
  collectionId: string;

  @Column({ name: "name", type: "varchar", nullable: true })
  name: string;

  @Column({ name: "description", type: "text", nullable: true })
  description: string | null;

  @Column({ name: "creatorAddress", type: "varchar" })
  creatorAddress: string;

  @Column({ name: "collectionType", type: "varchar" })
  collectionType: string;

  @Column({ name: "royaltyFee", type: "decimal", precision: 5, scale: 2 })
  royaltyFee: number;

  @Column({ name: "isActive", type: "boolean", default: true })
  isActive: boolean;

  @Column({ name: "metadata", type: "jsonb", nullable: true })
  metadata: Record<string, any> | null;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: Date;
}
