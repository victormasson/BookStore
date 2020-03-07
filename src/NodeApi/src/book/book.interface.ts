import { Document } from 'mongoose';

export interface Book extends Document {
  Name: String,
  Price: Number,
  Category: String,
  Author: String
}