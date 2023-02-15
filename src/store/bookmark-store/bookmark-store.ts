import { Global, Injectable } from '@nestjs/common';

export type Bookmarkentity = {
  id: string;
  url: string;
  description: string;
  name: string;
  userId: string;
};
@Global()
@Injectable()
export class BookmarkStore {
  bookmarks: Bookmarkentity[] = [];

  get(id: string): Bookmarkentity[] {
    return this.bookmarks.filter((bookmarkentity: Bookmarkentity) => {
      if (bookmarkentity.userId == id) {
        return bookmarkentity;
      }
    });
  }
  getall(): Bookmarkentity[] {
    return this.bookmarks;
  }

  save(bookmark: Bookmarkentity) {
    this.bookmarks.push(bookmark);
    return {
      id: bookmark.id,
      name: bookmark.name,
      describe: bookmark.description,
      userId: bookmark.userId,
      url: bookmark.url,
    };
  }
  getById(id: string): Bookmarkentity {
    return this.bookmarks.find((bookmark) => bookmark.id == id);
  }

  deletebyId(id: string): Bookmarkentity[] {
    return this.bookmarks.filter((bookmark) => bookmark.id !== id);
  }
}
