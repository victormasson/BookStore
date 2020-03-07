import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Book } from './book.interface';
import { CreateBookDTO } from './create-book.dto';

@Injectable()
export class BookService {

  constructor(@InjectModel('Books') private readonly bookModel: Model<Book>) { }

  async getBooks(): Promise<Book[]> {
    const books = await this.bookModel.find().exec();
    return books;
  }

  async getBook(bookID): Promise<Book> {
    const book = await this.bookModel
      .findById(bookID)
      .exec();
    return book;
  }

  async addBook(createBookDTO: CreateBookDTO): Promise<Book> {
    const newBook = await this.bookModel(createBookDTO);
    return newBook.save();
  }

  async editBook(bookID, createBookDTO: CreateBookDTO): Promise<Book> {
    const editedBook = await this.bookModel
      .findByIdAndUpdate(bookID, createBookDTO, { new: true });
    return editedBook;
  }

  async deleteBook(bookID): Promise<any> {
    const deletedBook = await this.bookModel
      .findByIdAndRemove(bookID);
    return deletedBook;
  }

}
