import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewDTO } from './dto/review.dto';

@Controller('review')
export class ReviewController {
  constructor(public readonly reviewService: ReviewService) {}

  @Get()
  async getAllReviews() {
    return await this.reviewService.getAllReviews();
  }

  @Get('survey/:id')
  async getReviewCount(@Param('id') surveyId: number) {
    return await this.reviewService.getReviewCount(surveyId);
  }

  @Post('makeReview')
  async addReview(@Body() review: ReviewDTO) {
    return await this.reviewService.addReview(review);
  }
}
