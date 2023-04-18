import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreateLoanApplicationDto } from './dto/create_loan_application.dto';
import { type } from "os";

@Controller('loan-application')
export class LoanApplicationController {
  @Post()
  @UseInterceptors(FilesInterceptor('files', 20))
  loanApplication(@UploadedFiles() files, @Body() body) {
    const createLoanApplicationDto: CreateLoanApplicationDto = body['data'];
    console.log(createLoanApplicationDto);
    console.log(typeof(files));
  }
}
