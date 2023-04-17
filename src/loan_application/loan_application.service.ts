import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoanApplication } from './entity/loan_application.entity';
import { Repository } from 'typeorm';
import { CreateLoanApplication } from './dto/create_loan_application.dto';

@Injectable()
export class LoanApplicationService {
  constructor(
    @InjectRepository(LoanApplication)
    private loanApplicationRepository: Repository<LoanApplication>,
  ) {}

  async addLoanApplication(loanApplication: CreateLoanApplication) {
    return await this.loanApplicationRepository.save(loanApplication);
  }
}
