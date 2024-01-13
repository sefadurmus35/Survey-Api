import { Prisma } from '@prisma/client';

export class SurveyDTO implements Prisma.SurveyCreateInput {
  id: string;
  title: string;
  content?: string;
  published?: boolean;
  authorId: number;
}
