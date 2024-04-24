import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ANALYTICS_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 10002,
        },
      },
      {
        name: 'DASHBOARD_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 10003,
        },
      },
      {
        name: 'DEPLOY_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 10004,
        },
      },
      {
        name: 'GITHUB_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 10005,
        },
      },
      {
        name: 'CLI_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 10006,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
