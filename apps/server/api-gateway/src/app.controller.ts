import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('status')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('analytics')
  async checkAnalyticsService(): Promise<String> {
    return await this.appService.getAnalyticsServiceUpdate();
  }

  @Get('cli')
  async checkCliService(): Promise<String> {
    return await this.appService.getCliServiceUpdate();
  }

  @Get('dashboard')
  async checkDashboardService(): Promise<String> {
    return await this.appService.getDashboardServiceUpdate();
  }

  @Get('deploy')
  async checkDeployService(): Promise<String> {
    return await this.appService.getDeployServiceUpdate();
  }

  @Get('github')
  async checkGithubService(): Promise<String> {
    return await this.appService.getGithubServiceUpdate();
  }
}
