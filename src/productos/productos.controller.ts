import { Controller,Param,Body,Get,Post,Put,Delete, ParseIntPipe } from '@nestjs/common';
import { CrearpProductoDTO,EditarProductoDTO } from './DTOs';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
constructor( private readonly productoservice:ProductosService){}

@Get()
async getAll(){

    const  data= await this.productoservice.getAll();
    return {

        message:'peticion correcta',
        data

    }


}
@Get(':id')
getOne(@Param('id',ParseIntPipe) id:number){

    console.log(typeof id)
    return this.productoservice.getOne(id);

}
@Post()
createOne(
    @Body() dto:CrearpProductoDTO 

    ){
        
        return this.productoservice.createOne(dto);
   
    }

@Put(':id')
updateOne(
    @Param('id') id:number,
    @Body() dto:EditarProductoDTO
    ){

    return this.productoservice.editOne(id,dto);

}
@Delete(':id')
dropOne(@Param('id') id:number){


    return this.productoservice.deleteOne(id) ;


}







}
