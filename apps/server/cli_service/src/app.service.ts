import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(data: string): string {
    console.log('success calling cli service!', data);
    return 'success calling cli service!';
  }
}
