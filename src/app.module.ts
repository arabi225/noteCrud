import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { get } from 'http';
import { NoteModule } from './note/note.module';
import {noteEntity } from './note/entities/note.entity';

import { DataSource } from 'typeorm';



@Module({
  imports: [
    NoteModule, 
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        username: 'root',
        password: 'password',
        database: 'noteDb',
        entities: [noteEntity],
        logging: true,
        synchronize: true,
      }
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}

}


