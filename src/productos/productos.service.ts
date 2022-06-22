import { Injectable, NotFoundException } from '@nestjs/common';
import { CrearpProductoDTO,EditarProductoDTO } from './DTOs';
import { Repository } from 'typeorm';
import { Productos } from './entities/producto-entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ProductosService {

        constructor(

                @InjectRepository(Productos)
                private readonly productoRepository:Repository<Productos>
                   ){}

        async getAll(){

            return await this.productoRepository.find();

        }
        async getOne(id:number){


            const producto = await this.productoRepository.findOne(id);
            if(!producto) throw new NotFoundException();
            return producto;


        }
       async  createOne(dto:CrearpProductoDTO){

            const producto= this.productoRepository.create(dto as any);    
            return await this.productoRepository.save(producto);


        }
        async editOne(id:number,dto:EditarProductoDTO){

            const producto = await this.productoRepository.findOne(id);
            if(!producto) throw new NotFoundException('Producto no existe');
            const editarProducto = Object.assign(producto,dto)    
            return await this.productoRepository.save(editarProducto);



        }
        async deleteOne(id:number){


            return await this.productoRepository.delete(id);


        }


}
