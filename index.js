import express from 'express';
import post from './api/index.js';

const app = express();

app.get('/', post);

app.listen(3000);
