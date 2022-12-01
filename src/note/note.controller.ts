import { Body, Controller,Delete,Get
    ,HttpException,HttpStatus,NotFoundException,Logger,
     NotImplementedException, Param, Post, Put } from '@nestjs/common';
import { NoteService } from './note.service';
import {noteEntity } from './entities/note.entity';
import { Console } from 'console';
import { noteDto } from 'src/dto/note.dto';



@Controller('note')
export class NoteController {

    constructor(private readonly noteService:NoteService){}

    @Get()
    getAll(){
        Logger.log('get all note', 'NoteController');
        return this.noteService.getNote();
    }

    @Get(':idNote')
    async getOne(@Param('idNote') idNote: number):Promise<noteEntity>{
        Logger.log('Get one note', 'NoteController');
        const note = await this.noteService.getOneNote(+idNote);
        if (note) {
            return note;
        }else{
            throw new NotFoundException('note not found');
        }
        
    }
    
    @Post()
    async create(@Body()NoteDto:noteDto){
        Logger.log('create an note', 'NoteController');
        const note = await this.noteService.createNote(NoteDto);
        if (note) {
            return note;
        }else{
            throw new NotFoundException(' not created');
        }
    }

    @Put(':idNote')
    async update(@Param('idNote')idNote ,@Body()noteDto){
        Logger.log('update an note', 'NoteController');
        const note = await this.noteService.updateNote(idNote,noteDto);
        if (note) {
            return note;
        }else{
            throw new NotFoundException(' not modified');
        }
    }

    @Delete(':idNote')
    async remove(@Param('idNote')idNote){
        Logger.log('delete an note', 'NoteController');
        const note = await this.noteService.removeNote(idNote);
        if (note) {
            return note;
        }else{
            throw new NotFoundException(' not found');
        }
    }


}
