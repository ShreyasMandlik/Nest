import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Bookmark } from './bookmark';
import { randomUUID } from 'crypto';
import { bookmarkDTO } from './bookmarkDTO';

@Controller('/bookmark')
export class BookmarkController {
  constructor(private readonly appService: Bookmark) {}

  @Get('')
  getall() {
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
}
