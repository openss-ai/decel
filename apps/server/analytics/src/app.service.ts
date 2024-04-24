import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTest(data: string): string {
    console.log('success calling analytics service!', data);
    return 'success calling analytics service!';
  }
}
