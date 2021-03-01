import mongoose from 'mongoose';
import dbConfig from '../../config/database/database.config';

export default () => { mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('Successfully connected to mongoDb database');
})};