import {CrearpProductoDTO} from './crear-producto';
import { PartialType, OmitType } from '@nestjs/mapped-types';
export class EditarProductoDTO extends PartialType(

    OmitType(CrearpProductoDTO,['categoria'] as const),){}



