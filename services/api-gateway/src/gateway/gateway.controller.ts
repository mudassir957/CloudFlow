import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { GatewayService } from './gateway.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { CreateOrderDto } from './dto/create-order.dto';

@ApiTags('CloudFlow')
@Controller()
export class GatewayController {
  constructor(
    private readonly gatewayService: GatewayService,
  ) {}

  // -------------------------
  // USER
  // -------------------------

  @Post('users/register')
  @ApiOperation({
    summary: 'Register a new user',
  })
  @ApiBody({
    type: RegisterDto,
  })
  register(@Body() body: RegisterDto) {
    return this.gatewayService.registerUser(body);
  }

  @Post('auth/login')
  @ApiOperation({
    summary: 'Login and get JWT token',
  })
  @ApiBody({
    type: LoginDto,
  })
  login(@Body() body: LoginDto) {
    return this.gatewayService.login(body);
  }

  @Get('users/profile')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get current user profile',
  })
  profile(
    @Headers('authorization') auth: string,
  ) {
    return this.gatewayService.getProfile(auth);
  }

  // -------------------------
  // ORDERS
  // -------------------------

  @Post('orders')
  @ApiOperation({
    summary: 'Create a new order',
  })
  @ApiBody({
    type: CreateOrderDto,
  })
  createOrder(
    @Body() body: CreateOrderDto,
  ) {
    return this.gatewayService.createOrder(body);
  }

  @Get('orders/user/:userId')
  @ApiOperation({
    summary: 'Get all orders for a user',
  })
  @ApiParam({
    name: 'userId',
    example: 1,
    description: 'User ID',
  })
  getOrdersByUser(
    @Param('userId') userId: string,
  ) {
    return this.gatewayService.getOrdersByUser(userId);
  }

  @Get('orders/:id')
  @ApiOperation({
    summary: 'Get order by ID',
  })
  @ApiParam({
    name: 'id',
    example: 1,
    description: 'Order ID',
  })
  getOrder(
    @Param('id') id: string,
  ) {
    return this.gatewayService.getOrder(id);
  }
}