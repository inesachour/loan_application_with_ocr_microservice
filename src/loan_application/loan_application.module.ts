import { Module } from '@nestjs/common';
import { LoanApplicationController } from './loan_application.controller';
import { LoanApplicationService } from './loan_application.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanApplication } from './entity/loan_application.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoanApplication])],
  controllers: [LoanApplicationController],
  providers: [LoanApplicationService],
})
export class LoanApplicationModule {}
