import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GatewayService {
  constructor(
    private readonly http: HttpService,
    private readonly configService: ConfigService,
  ) {}

  // -------------------------
  // USER SERVICE
  // -------------------------

  async registerUser(data: any) {
    const userServiceUrl =
      this.configService.get<string>('USER_SERVICE_URL');

    const response = await firstValueFrom(
      this.http.post(
        `${userServiceUrl}/users/register`,
        data,
      ),
    );

    return response.data;
  }

  async login(data: any) {
    const userServiceUrl =
      this.configService.get<string>('USER_SERVICE_URL');

    const response = await firstValueFrom(
      this.http.post(
        `${userServiceUrl}/auth/login`,
        data,
      ),
    );

    return response.data;
  }

  async getProfile(token: string) {
    const userServiceUrl =
      this.configService.get<string>('USER_SERVICE_URL');

    const response = await firstValueFrom(
      this.http.get(
        `${userServiceUrl}/users/profile`,
        {
          headers: {
            Authorization: token,
          },
        },
      ),
    );

    return response.data;
  }

  // -------------------------
  // ORDER SERVICE
  // -------------------------

  async createOrder(data: any) {
    const orderServiceUrl =
      this.configService.get<string>('ORDER_SERVICE_URL');

    const response = await firstValueFrom(
      this.http.post(
        `${orderServiceUrl}/orders`,
        data,
      ),
    );

    return response.data;
  }

  async getOrdersByUser(userId: string) {
    const orderServiceUrl =
      this.configService.get<string>('ORDER_SERVICE_URL');

    const response = await firstValueFrom(
      this.http.get(
        `${orderServiceUrl}/orders/user/${userId}`,
      ),
    );

    return response.data;
  }

  async getOrder(id: string) {
    const orderServiceUrl =
      this.configService.get<string>('ORDER_SERVICE_URL');

    const response = await firstValueFrom(
      this.http.get(
        `${orderServiceUrl}/orders/${id}`,
      ),
    );

    return response.data;
  }
}