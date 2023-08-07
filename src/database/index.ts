import mongoose from 'mongoose';
import config from '../core/config';

async function initDB() {
  await mongoose.connect(config.dbURI as string);
  console.log('Database connected');
}

export default initDB;
