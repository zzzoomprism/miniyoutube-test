import express from 'express';
import http from 'http';
import cors from 'cors';
import path from 'path';
import fileUpload from 'express-fileupload';
import { router } from './api/route';

require('dotenv').config();

const app = express();
const server = http.createServer(app);

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(router);

const port = process.env.PORT || 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));

server.listen(port);

export default server;
