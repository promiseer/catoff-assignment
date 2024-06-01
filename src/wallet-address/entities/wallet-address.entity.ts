import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WalletAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column({ nullable: true })
  label: string; // Assuming label is optional

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  balance: number; // Assuming balance is stored as decimal with precision 10 and scale 2

  // Add other columns as needed
}
