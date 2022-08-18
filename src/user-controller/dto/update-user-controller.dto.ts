import { PartialType } from '@nestjs/mapped-types';
import { CreateUserControllerDto } from './create-user-controller.dto';

export class UpdateUserControllerDto extends PartialType(CreateUserControllerDto) {}
