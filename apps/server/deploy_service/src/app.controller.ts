import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import DeployFromGithub from './dto/deploy.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('deployServiceWorking')
  getTest(data: string) {
    return this.appService.getTest(data);
  }

  @MessagePattern('deployFromGitHub')
  deployFromGit(data: DeployFromGithub) {
    return this.appService.deployFromGitHub(data);
  }
}
