import {Controller, Get, Param} from '@nestjs/common';
import { UsersService } from './users.service';
import {ApiTags} from "@nestjs/swagger";

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Get(':id')
  getUser(@Param('id') userId: number): string {
    return this.appService.getUser(userId);
  }
}
