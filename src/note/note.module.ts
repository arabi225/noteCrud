import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import {noteEntity } from './entities/note.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([noteEntity])
  ],
  controllers: [NoteController],
  providers: [NoteService]
})
export class NoteModule {}
