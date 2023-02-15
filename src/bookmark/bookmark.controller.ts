import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Bookmark } from './bookmark';
import { randomUUID } from 'crypto';
import { bookmarkDTO } from './bookmarkDTO';
import { IRequest } from 'src/type';
import { NextFunction, Response } from 'express';

@Controller('/bookmark')
export class BookmarkController {
  constructor(private readonly appService: Bookmark) {}

  @Get('')
  getall(res:IRequest,rep:Response,next:NextFunction) {
    return this.appService.getall();
  }

  @Post('')
  saveBookmark(@Body() bookmark: bookmarkDTO) {
    return this.appService.save(bookmark);
  }
  
  @Get(':id')
  getbyId(@Param('id') id: string) {
    return this.appService.getbyId(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.deleteById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() bookmark: bookmarkDTO) {
    return this.appService.update(id, bookmark);
  }
}
