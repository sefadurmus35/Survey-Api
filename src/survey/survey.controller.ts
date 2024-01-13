import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { Survey } from '@prisma/client';
import { SurveyDTO } from './dto/survey.dto';

@Controller('survey')
export class SurveyController {
  constructor(public readonly surveyService: SurveyService) {}

  @Get()
  async getAllSurveys() {
    return await this.surveyService.getSurveys();
  }

  @Get('/user/:id')
  async getSurveyById(@Param() param: any) {
    return await this.surveyService.getSurveyByUserId(param.userId);
  }

  @Post('create')
  async createSurvey(@Body() survey: SurveyDTO): Promise<Survey> {
    return await this.surveyService.createSurvey(survey);
  }
}
