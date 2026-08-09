import { Injectable, OnModuleInit } from '@nestjs/common';
import * as amqp from 'amqplib';
import { RedisService } from '../redis/redis.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RabbitMQService implements OnModuleInit {
  constructor(
    private readonly redisService: RedisService,
    private readonly configService: ConfigService
  ) {}

  async onModuleInit() {
    const rabbitUrl = this.configService.get<string>('RABBITMQ_URL');
    if (!rabbitUrl) {
      throw new Error('RABBITMQ_URL is not defined in configuration');
    }

    const connection = await amqp.connect(rabbitUrl);

    const channel = await connection.createChannel();

    await channel.assertQueue('order-events');

    console.log('Waiting for order events...');

    channel.consume('order-events', async (message) => {
      if (message) {
        const data = JSON.parse(message.content.toString());

        console.log('Event received:', data);

        const notification = {
          message: `Order ${data.orderId} created successfully`,
          product: data.productName,
          createdAt: new Date().toISOString(),
        };

        await this.redisService.saveNotification(
          data.userId,
          notification,
        );

        channel.ack(message);
      }
    });
  }
}