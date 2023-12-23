import { Injectable } from '@nestjs/common';
import { Prisma, Survey } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SurveyService {
  constructor(public readonly prismaService: PrismaService) {}

  async getSurveys() {
    return this.prismaService.survey.findMany();
  }
  async createSurvey(data: Prisma.SurveyCreateInput): Promise<Survey> {
    return this.prismaService.survey.create({
      data,
    });
  }
}
