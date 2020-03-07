import { Connection } from 'mongoose';
import { BookSchema } from './book.schema';

export const articleProvider = [
  {
    provide: 'BOOK_MODEL',
    useFactory: (connection: Connection) => connection.model('Books', BookSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];