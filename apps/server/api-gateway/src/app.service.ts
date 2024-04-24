import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('ANALYTICS_SERVICE') private readonly analyticsClient: ClientProxy,
    @Inject('DASHBOARD_SERVICE') private readonly dashboardClient: ClientProxy,
    @Inject('DEPLOY_SERVICE') private readonly deployClient: ClientProxy,
    @Inject('GITHUB_SERVICE') private readonly githubClient: ClientProxy,
    @Inject('CLI_SERVICE') private readonly cliClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getAnalyticsServiceUpdate(): Promise<String> {
    const analyticsServiceUpdate: String = await lastValueFrom(
      this.analyticsClient.emit('analyticsServiceWorking', 'Test!'),
    );
    return analyticsServiceUpdate;
  }

  async getGithubServiceUpdate(): Promise<String> {
    const githubServiceUpdate: String = await lastValueFrom(
      this.githubClient.emit('githubServiceWorking', 'Test!'),
    );
    return githubServiceUpdate;
  }

  async getDeployServiceUpdate(): Promise<String> {
    const deployServiceUpdate: String = await lastValueFrom(
      this.deployClient.emit('deployServiceWorking', 'Test!'),
    );
    return deployServiceUpdate;
  }

  async getDashboardServiceUpdate(): Promise<String> {
    const dashboardServiceUpdate: String = await lastValueFrom(
      this.dashboardClient.emit('dashboardServiceWorking', 'Test!'),
    );
    return dashboardServiceUpdate;
  }

  async getCliServiceUpdate(): Promise<String> {
    const githubServiceUpdate: String = await lastValueFrom(
      this.cliClient.emit('cliServiceWorking', 'Test!'),
    );
    return githubServiceUpdate;
  }
}
