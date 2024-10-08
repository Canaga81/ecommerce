import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { GetOrderDto } from './dto/get-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { AuthGuard } from 'src/guards/auth.guards';

@Controller('order')
@ApiBearerAuth()
@ApiTags('Order')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Get()
  @UseGuards(AuthGuard)
  find(@Query() query: GetOrderDto) {
    const pagination = { limit: query.limit || 10, page: query.page ?? 0 };
    return this.orderService.find({
      pagination,
      relations: ['items', 'items.product'],
    });
  }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() body: CreateOrderDto) {
    return this.orderService.create(body);
  }
}