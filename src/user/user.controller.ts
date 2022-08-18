import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'user-service/user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly config: ConfigService,
    private readonly user: UsersService,
  ) {}

  // @Get('findUser')
  // async findUser(): Promise<any[]> {
  //   const response = await this.user.findData();
  //   return response;
  // }

  @Get('getEnvData')
  getEnvData(): string {
    return 'This is from env file ' + process.env.user_name;
  }
  @Get('getfromconfig')
  getDataFromConfig(): string {
    return 'this is from config service :: ' + this.config.get('user_name');
  }
  @Get('getfromdummy')
  getDataFromDummy(): string {
    return 'this is from config service :: ' + this.config.get('user_name');
  }

  // @Get()
  // getAllUserData(): Promise<any[]> {
  //   return this.user.findData();
  // }
  // @Post('add-user')
  // addUser(@Body() body: any) {
  //   return 'Hi ' + body?.name;
  // }
  // @Post('create-user')
  // createUser(@Body() body: any) {
  //   return this.user.create(body);
  // }
}
