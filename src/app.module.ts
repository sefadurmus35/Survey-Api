import { Module } from '@nestjs/common';
import { SurveyService } from './survey/survey.service';
import { ReviewModule } from './review/review.module';
import { SurveyController } from './survey/survey.controller';
import { SurveyModule } from './survey/survey.module';
import { ReviewController } from './review/review.controller';
import { ReviewService } from './review/review.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [SurveyModule, ReviewModule],
  controllers: [SurveyController, ReviewController],
  providers: [SurveyService, ReviewService, PrismaService],
})
export class AppModule {}
