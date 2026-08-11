import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ example: 1 })
  userId!: number;

  @ApiProperty({ example: 'MacBook Pro M4' })
  productName!: string;

  @ApiProperty({ example: 1 })
  quantity!: number;
}