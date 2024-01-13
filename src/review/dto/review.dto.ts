import { Prisma } from '@prisma/client';

export class ReviewDTO implements Omit<Prisma.ReviewCreateInput, 'survey'> {
  surveyId: number;
  answer: string;
}
