import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    user_id: number;

    @Column()
    title: string;
    
    @Column()
    description: string;
    
    @Column()
    location: string;

    @Column()
    date: Date;

    @Column()
    picture: string;
}
