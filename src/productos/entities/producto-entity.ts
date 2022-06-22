import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Productos {

    @PrimaryGeneratedColumn()/* generando llave primary */
    id: number;

    @Column({ type: 'varchar', length: 150 })
    titulo!: string;

    @Column({ type: 'varchar', length: 255 })
    descripcion?: string;

    @Column({ type: 'text' })
    categoria!: string;

    @Column({ type: 'simple-array' })
    proveedores: string[];

    @Column({ type: 'varchar', length: 150 })
    cantidad!: string;

    @Column({ type: 'bool', default: true })
    surtido!: boolean;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

    @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
    updatedAt: Date;


}