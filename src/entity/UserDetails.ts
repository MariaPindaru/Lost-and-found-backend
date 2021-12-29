import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class UserDetails {

    @PrimaryColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;
    
    @Column()
    phone_number: string;
    
    @Column()
    email_address: string;
}
