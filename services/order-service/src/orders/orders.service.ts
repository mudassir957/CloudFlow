import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RabbitMQService } from "../rabbitmq/rabbitmq.service";

import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    private rabbitMQService: RabbitMQService,
  ) { }

  async create(createOrderDto: CreateOrderDto) {
    const order = this.ordersRepository.create(createOrderDto);

    const saved = await this.ordersRepository.save(order);

    await this.rabbitMQService.publishOrderCreated({
      type: 'ORDER_CREATED',
      orderId: saved.id,
      userId: saved.userId,
      productName: saved.productName,
    });

    return saved;
  }

  async findOne(id: number) {
    const order = await this.ordersRepository.findOne({
      where: { id },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return order;
  }

  findByUser(userId: number) {
    return this.ordersRepository.find({
      where: { userId },
      order: { createdAt: 'DESC' },
    });
  }

  async updateStatus(
    id: number,
    updateDto: UpdateOrderStatusDto,
  ) {
    const order = await this.findOne(id);

    order.status = updateDto.status;

    return this.ordersRepository.save(order);
  }
}