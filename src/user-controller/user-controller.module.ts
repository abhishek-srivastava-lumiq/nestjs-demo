import { Module } from '@nestjs/common';
import { UserControllerService } from './user-controller.service';
import { UserControllerController } from './user-controller.controller';

@Module({
  controllers: [UserControllerController],
  providers: [UserControllerService]
})
export class UserControllerModule {}
