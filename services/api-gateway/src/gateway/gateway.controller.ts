import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
} from '@nestjs/common';

import { GatewayService } from './gateway.service';

@Controller()
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Post('users/register')
  register(@Body() body: any) {
    return this.gatewayService.registerUser(body);
  }

  @Post('auth/login')
  login(@Body() body: any) {
    return this.gatewayService.login(body);
  }

  @Get('users/profile')
  profile(@Headers('authorization') auth: string) {
    return this.gatewayService.getProfile(auth);
  }

  @Post('orders')
  createOrder(@Body() body: any) {
    return this.gatewayService.createOrder(body);
  }

  @Get('orders/:id')
  getOrder(@Param('id') id: string) {
    return this.gatewayService.getOrder(id);
  }
}