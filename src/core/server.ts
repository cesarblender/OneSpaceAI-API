import express from 'express';
import router from '../api';
import initDB from '../database';

const app = express();

// database
initDB();

// app middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
app.use(router);

export default app;
