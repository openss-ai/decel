import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(data: string): string {
    console.log('success calling github service!', data);
    return 'success calling github service!';
  }
}
