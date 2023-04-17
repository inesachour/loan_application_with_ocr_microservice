import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoanApplicationModule } from './loan_application/loan_application.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    LoanApplicationModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      username: '',
      password: '',
      database: '',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
