import { IsString, IsNotEmpty } from 'class-validator';

class DeployFromGithub {
  @IsString()
  @IsNotEmpty()
  repository: string;

  @IsString()
  @IsNotEmpty()
  branch: string;

  @IsString()
  @IsNotEmpty()
  path: string;

  @IsString()
  @IsNotEmpty()
  buildCommand: string;

  @IsString()
  @IsNotEmpty()
  startCommand: string;
}

export default DeployFromGithub;
