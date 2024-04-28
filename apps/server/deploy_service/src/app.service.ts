import { Injectable } from '@nestjs/common';
import DeployFromGithub from './dto/deploy.dto';

@Injectable()
export class AppService {
  getTest(data: string) {
    return {
      status: 200,
      message: 'Deploy service is working!',
    };
  }

  deployFromGitHub(data: DeployFromGithub) {}
}
