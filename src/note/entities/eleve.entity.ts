import { Entity,PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class eleveEntity{

    @PrimaryGeneratedColumn({name: 'id_Eleve'})
    idEleve: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    classe: string
}


