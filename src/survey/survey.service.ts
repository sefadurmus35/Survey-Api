import { Injectable } from '@nestjs/common';
import { Survey } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { SurveyDTO } from './dto/survey.dto';

@Injectable()
export class SurveyService {
  constructor(public readonly prismaService: PrismaService) {}

  async getSurveys() {
    return this.prismaService.survey.findMany();
  }

  async getSurveyByUserId(id: number): Promise<Survey> {
    return this.prismaService.survey.findFirst({
      where: {
        authorId: id,
      },
    });
  }

  async createSurvey(survey: SurveyDTO): Promise<Survey> {
    const { id, ...surveyData } = survey; // Omit 'id' if it's not needed for creation

    return this.prismaService.survey.create({ data: surveyData });
  }
}
