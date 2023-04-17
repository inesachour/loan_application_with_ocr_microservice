import { Body, Controller, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";

@Controller('loan-application')
export class LoanApplicationController {

  @Post()
  @UseInterceptors(FilesInterceptor('files', 20))
  loanApplication(@UploadedFiles() files, @Body() body){

  }
}
