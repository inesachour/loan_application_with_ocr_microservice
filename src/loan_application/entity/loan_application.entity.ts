import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LoanApplication {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  first_name: string;
}
