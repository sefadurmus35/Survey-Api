import { Injectable } from '@nestjs/common';
import { ReviewDTO } from './dto/review.dto';
import { PrismaService } from 'src/prisma.service';
import { Review } from '@prisma/client';

@Injectable()
export class ReviewService {
  constructor(public readonly prismaService: PrismaService) {}

  async getAllReviews(): Promise<Review[]> {
    return this.prismaService.review.findMany();
  }
  async addReview(review: ReviewDTO): Promise<Review> {
    return this.prismaService.review.create({ data: review });
  }

  async getReviewCount(surveyId) {
    const result = await this.prismaService.review.groupBy({
      by: ['answer'],
      _count: {
        answer: true,
      },
      where: {
        surveyId: Number(surveyId),
        answer: {
          in: ['happy', 'sad', 'neutral'], // List all possible answers here
        },
      },
    });

    const mappedResult = result.reduce((acc, item) => {
      acc[item.answer] = item._count.answer;
      return acc;
    }, {});

    return { count: mappedResult };
  }
}
