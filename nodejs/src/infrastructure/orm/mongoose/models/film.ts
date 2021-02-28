import mongoose, { Schema, Document} from 'mongoose';
import { Meta } from '../../../../domain/Film/Meta';

export interface IFilmModel extends Document {
    title: string,
    actors: [string],
    date: Date,
    meta: {
        usersNote: number,
        pressNote: number
    },
    synopsis: string
}

const FilmSchema = new Schema({
    title: String,
    actors: [String],
    date: Date,
    meta: {
        usersNote: Number,
        pressNote: Number
    },
    synopsis: String
});

export default mongoose.model<IFilmModel>('Film', FilmSchema);