import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  @Min(1)
  userId!: number;

  @IsNotEmpty()
  productName!: string;

  @IsInt()
  @Min(1)
  quantity!: number;
}