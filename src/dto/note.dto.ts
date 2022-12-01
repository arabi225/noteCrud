import { ApiProperty } from '@nestjs/swagger';
import {noteEntity } from 'src/note/entities/note.entity';


export class noteDto {
  @ApiProperty()
  idNote: number;
  @ApiProperty({ example: 'newtitre' })
  title: String;
  @ApiProperty({ example: 'blabla' })
  texte: String;
  @ApiProperty()
  author: String;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;

 constructor(value: noteEntity) {
    this.idNote = value.idNote ?? 0;
    this.title = value.title ?? '';
    this.texte = value.texte ?? '';
    this.author = value.author ?? '';
    this.createdAt = value.createdAt ?? new Date();
    this.updatedAt = value.updatedAt ?? new Date();
  }
}