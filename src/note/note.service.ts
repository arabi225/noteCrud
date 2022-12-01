import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {noteEntity } from './entities/note.entity';
import { Repository } from "typeorm";
import { noteDto } from 'src/dto/note.dto';


@Injectable()
export class NoteService {

    constructor(
        @InjectRepository(noteEntity)
        private readonly noteRepository:Repository<noteEntity>

    ){}

    getNote(){
        return this.noteRepository.find();
    }


   async getOneNote(idNote: number): Promise<noteEntity> {
       const note = await this.noteRepository.findOneById(idNote);
       if (note) {
        return note;
       }else{
        return null;
       }
       
    }

    async createNote(NoteDto: noteDto){
        const note = await this.noteRepository.save(NoteDto); 
        return note;
    }

    async updateNote(idNote:number,NoteDto: noteDto){
        const note = await this.noteRepository.findOneById(idNote); 
        if(!note){
            return null;
        }else{
           await this.noteRepository.update(idNote, NoteDto);
           return await this.noteRepository.findOneById(idNote); 
        }
        
    }

    async removeNote(idNote:number){
        const note = await this.noteRepository.findOneById(idNote); 
        if(!note){
            return null;
        }else{
           await this.noteRepository.remove(note);
           return note; 
        }
        
    }

    
}
