import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'cloudflow',
      password: 'password',
      database: 'cloudflow_orders',
      autoLoadEntities: true,
      synchronize: true,
    }),
    OrdersModule,
  ],
})
export class AppModule {}