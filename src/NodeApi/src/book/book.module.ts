import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './book.schema';
import { Book } from './book.interface'

@Module({
  imports: [
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule { }
