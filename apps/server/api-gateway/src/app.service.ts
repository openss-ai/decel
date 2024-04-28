import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import DeployFromGithub from './dto/deploy.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('ANALYTICS_SERVICE') private readonly analyticsClient: ClientProxy,
    @Inject('DASHBOARD_SERVICE') private readonly dashboardClient: ClientProxy,
    @Inject('DEPLOY_SERVICE') private readonly deployClient: ClientProxy,
    @Inject('GITHUB_SERVICE') private readonly githubClient: ClientProxy,
    @Inject('CLI_SERVICE') private readonly cliClient: ClientProxy,
  ) {}

  async getHello(): Promise<MicroServiceEventStatus[]> {
    const analyticsServiceUpdate: MicroServiceEventStatus = await lastValueFrom(
      this.analyticsClient.send('analyticsServiceWorking', 'Test!'),
    );
    const githubServiceUpdate: MicroServiceEventStatus = await lastValueFrom(
      this.githubClient.send('githubServiceWorking', 'Test!'),
    );
    const deployServiceUpdate: MicroServiceEventStatus = await lastValueFrom(
      this.deployClient.send('deployServiceWorking', 'Test!'),
    );
    const dashboardServiceUpdate: MicroServiceEventStatus = await lastValueFrom(
      this.dashboardClient.send('dashboardServiceWorking', 'Test!'),
    );
    const cliServiceUpdate: MicroServiceEventStatus = await lastValueFrom(
      this.cliClient.send('cliServiceWorking', 'Test!'),
    );
    return [
      analyticsServiceUpdate,
      githubServiceUpdate,
      deployServiceUpdate,
      dashboardServiceUpdate,
      cliServiceUpdate,
    ];
  }

  async deployFromGitHub(data: DeployFromGithub) {
    return await this.deployClient.send('deployFromGitHub', data);
  }
}
