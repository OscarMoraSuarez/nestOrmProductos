import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
              TypeOrmModule.forRoot({
              type: 'mysql',
              host: 'localhost',
              port: 3306,
              username: 'root',
              password: '',
              database: 'Productos',
              entities: [__dirname + './**/**/*entity{.ts,.js}'],
              autoLoadEntities: true,
              synchronize: true,
            }),
            ProductosModule
            ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
