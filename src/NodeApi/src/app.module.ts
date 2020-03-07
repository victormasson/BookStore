import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from './book/book.controller';
import { BookModule } from './book/book.module';
import { BookService } from './book/book.service';
import { BookSchema } from './book/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Books',
      schema: BookSchema,
      collection: process.env.BOOKS_COLLECTION
    }]),
    MongooseModule.forRoot(`${process.env.CONNECTION_STRING}/${process.env.BOOK_DATABASE}`)
  ],
  controllers: [AppController, BookController],
  providers: [AppService, BookService],
})
export class AppModule { }
