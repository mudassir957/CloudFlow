import { Injectable, OnModuleInit } from '@nestjs/common';
import * as amqp from 'amqplib';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class RabbitMQService implements OnModuleInit {
  private channel!: amqp.Channel;

  constructor(private configService: ConfigService) { }

  async onModuleInit() {
    const connection = await amqp.connect(this.configService.get<string>('RABBITMQ_URL')!)

    this.channel = await connection.createChannel();

    await this.channel.assertQueue('order-events');
  }

  async publishOrderCreated(data: any) {
    this.channel.sendToQueue(
      'order-events',
      Buffer.from(JSON.stringify(data)),
    );

    console.log('📤 ORDER_CREATED event published', data);
  }
}