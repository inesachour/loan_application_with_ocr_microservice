import { Module } from '@nestjs/common';
import { LoanApplicationController } from './loan_application.controller';
import { LoanApplicationService } from './loan_application.service';

@Module({
  controllers: [LoanApplicationController],
  providers: [LoanApplicationService]
})
export class LoanApplicationModule {}
