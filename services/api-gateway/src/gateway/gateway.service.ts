import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config/dist/config.service';

@Injectable()
export class GatewayService {
  constructor(private readonly http: HttpService, private readonly configService: ConfigService) {}

  async registerUser(data: any) {
    const response = await firstValueFrom(
      this.http.post(this.configService.get<string>('USER_SERVICE_URL') + '/users/register', data),
    );
    return response.data;
  }

  async login(data: any) {
    const response = await firstValueFrom(
      this.http.post(this.configService.get<string>('USER_SERVICE_URL') + '/auth/login', data),
    );
    return response.data;
  }

  async getProfile(token: string) {
    const response = await firstValueFrom(
      this.http.get(this.configService.get<string>('USER_SERVICE_URL') + '/users/profile', {
        headers: {
          Authorization: token,
        },
      }),
    );
    return response.data;
  }

  async createOrder(data: any) {
    const response = await firstValueFrom(
      this.http.post(this.configService.get<string>('ORDER_SERVICE_URL') + '/orders', data),
    );
    return response.data;
  }

  async getOrder(id: string) {
    const response = await firstValueFrom(
      this.http.get(this.configService.get<string>('ORDER_SERVICE_URL') + `/orders/${id}`),
    );
    return response.data;
  }
}