import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoanApplication } from './entity/loan_application.entity';
import { Repository } from 'typeorm';
import { CreateLoanApplicationDto } from './dto/create_loan_application.dto';
import { OcrService } from '../ocr/ocr.service';

@Injectable()
export class LoanApplicationService {
  constructor(
    @InjectRepository(LoanApplication)
    private loanApplicationRepository: Repository<LoanApplication>,
    private ocrService: OcrService,
  ) {}

  async addLoanApplication(loanApplication: CreateLoanApplicationDto, files) {
    //return await this.loanApplicationRepository.save(loanApplication);
    //this.ocrService.extractTextFromPDF(files);
  }
}
