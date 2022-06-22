import { ProductoCategoria } from '../enums/producto-categoria.enum';
import { IsNotEmpty, IsNumber, IsString, IsBoolean, IsEnum, IsArray, IsOptional, } from 'class-validator';
import { EnumToString }from '../../helpers/enumToString';



export class CrearpProductoDTO{
   /*  @IsNumber()
    id:number; */
    @IsString()
    titulo: string;
    @IsString()
    descripcion: string;
    @IsEnum(ProductoCategoria,{
        
        message: `Opcion Invalida, las opciones correctas son ${EnumToString(ProductoCategoria)}`

    })
    categoria: ProductoCategoria;
    @IsString({each:true})
    @IsArray()
    proveedores:string[];
    @IsNumber()
    cantidad: number;
    @IsBoolean()
    surtido:boolean;

}