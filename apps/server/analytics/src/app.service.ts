import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTest(data: string) {
    return {
      status: 200,
      message: 'Analytics service is working!',
    };
  }
}
