import { Controller, Get, Post } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { Prisma, Survey } from '@prisma/client';

@Controller('survey')
export class SurveyController {
  constructor(public readonly surveyService: SurveyService) {}

  @Get()
  async getAllSurveys() {
    return await this.surveyService.getSurveys();
  }

  @Post('create')
  async createSurvey(survey: Prisma.SurveyCreateInput): Promise<Survey> {
    return this.surveyService.createSurvey(survey);
  }
}
