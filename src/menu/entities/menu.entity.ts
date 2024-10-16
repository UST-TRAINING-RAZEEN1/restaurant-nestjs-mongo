import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Menu {
    
    @ObjectIdColumn()
    dishName:string;
    @Column()
    price:number;
    @Column()
    category:string;
}