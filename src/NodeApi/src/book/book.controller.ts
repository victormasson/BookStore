import { Controller, Res, Get, HttpStatus, NotFoundException, Post, Body, Param, Put, Query, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDTO } from './create-book.dto';

@Controller('api/books')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @Get('')
  async getBooks(@Res() res) {
    const books = await this.bookService.getBooks();
    return res.status(HttpStatus.OK).json(books);
  }

  @Get('/:bookID')
  async getBook(@Res() res, @Param('bookID') bookID) {
    const book = await this.bookService.getBook(bookID);
    if (!book) throw new NotFoundException('Book does not exist!');
    return res.status(HttpStatus.OK).json(book);
  }

  @Post('')
  async addBook(@Res() res, @Body() createBookDTO: CreateBookDTO) {
    const newBook = await this.bookService.addBook(createBookDTO);
    return res.status(HttpStatus.OK).json({
      message: "Book has been submitted successfully!",
      book: newBook
    })
  }

  @Put('')
  async editBook(
    @Res() res, @Query('bookID') bookID,
    @Body() createBookDTO: CreateBookDTO
  ) {
    const editedBook = await this.bookService.editBook(bookID, createBookDTO);
    if (!editedBook) throw new NotFoundException('Book does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Book has been successfully updated',
      book: editedBook
    })
  }

  @Delete('')
  async deleteBook(@Res() res, @Query('bookID') bookID) {
    const deletedBook = await this.bookService.deleteBook(bookID);
    if (!deletedBook) throw new NotFoundException('Book does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Book has been deleted!',
      book: deletedBook
    })
  }
}