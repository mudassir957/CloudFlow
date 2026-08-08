import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GatewayService {
  constructor(private readonly http: HttpService) {}

  async registerUser(data: any) {
    const response = await firstValueFrom(
      this.http.post('http://localhost:3000/users/register', data),
    );
    return response.data;
  }

  async login(data: any) {
    const response = await firstValueFrom(
      this.http.post('http://localhost:3000/auth/login', data),
    );
    return response.data;
  }

  async getProfile(token: string) {
    const response = await firstValueFrom(
      this.http.get('http://localhost:3000/users/profile', {
        headers: {
          Authorization: token,
        },
      }),
    );
    return response.data;
  }

  async createOrder(data: any) {
    const response = await firstValueFrom(
      this.http.post('http://localhost:3001/orders', data),
    );
    return response.data;
  }

  async getOrder(id: string) {
    const response = await firstValueFrom(
      this.http.get(`http://localhost:3001/orders/${id}`),
    );
    return response.data;
  }
}