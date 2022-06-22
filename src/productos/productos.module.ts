import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Productos } from './entities/producto-entity';



@Module({
  imports:[TypeOrmModule.forFeature([Productos])],
  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule {}
