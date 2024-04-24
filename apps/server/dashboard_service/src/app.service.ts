import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(data: string) {
    return {
      status: 200,
      message: 'Dashboard service is working!',
    };
  }
}
