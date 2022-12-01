import { Entity,PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

type noteEntityProperties = Required<noteEntity>;

@Entity()
export class noteEntity{

    @PrimaryGeneratedColumn({name: 'idNote'})
    public idNote: number

    @Column()
    public title: String

    @Column({type : 'text', name:'texte'})
    public texte: String

    @Column({name: 'author'})
    public author?: String

    @CreateDateColumn({name:'date_de_creation'})
    public createdAt: Date = new Date();

    @UpdateDateColumn({name:'date_de_modif'})
    public updatedAt: Date = new Date();

    public static fromProperties(value: noteEntityProperties):noteEntity {
        const note = new noteEntity();
        note.idNote = value.idNote ;
        note.title = value.title ;
        note.texte = value.texte ;
        note.author = value.author ;
        note.createdAt = value.createdAt ;
        note.updatedAt = value.updatedAt ;
        return note;
      }
}