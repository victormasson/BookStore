import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  Name: String,
  Price: Number,
  Category: String,
  Author: String
})