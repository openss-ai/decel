import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import DeployFromGithub from './dto/deploy.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('status')
  async getHello(): Promise<MicroServiceEventStatus[]> {
    return await this.appService.getHello();
  }

  // deployFromGitHub
  @Post('deployGithub')
  async deployFromGitHub(@Body() data: DeployFromGithub) {
    return await this.appService.deployFromGitHub(data);
  }
}
