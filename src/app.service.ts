import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  // constructor(private configService: Con)

  getHello(): string {
    return 'Hello World!';
  }
}
