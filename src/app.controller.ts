import {Controller, Get, Req, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {AuthGuard} from "@nestjs/passport";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard("google"))
  googleAuth(@Req() req: any): void {}

  @Get("auth/google/callback")
  @UseGuards(AuthGuard("google"))
  googleLogin(@Req() req: any) {
    return this.appService.googleLogin(req);
  }
}
