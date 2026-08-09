import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RedisService implements OnModuleInit {
  private client!: RedisClientType;

  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    this.client = createClient({
      url: this.configService.get<string>('REDIS_URL'),
    });

    await this.client.connect();

    console.log('Connected to Redis');
  }

  async saveNotification(userId: number, notification: any) {
    const key = `notifications:user:${userId}`;

    await this.client.rPush(key, JSON.stringify(notification));

    console.log('Notification saved to Redis');
  }
}