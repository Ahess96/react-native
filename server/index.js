import dotenv from 'dotenv';
// const dotenv = require('dotenv');
dotenv.config();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import authRoutes from './routes/auth';

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const authRoutes = require('./routes/auth')
const morgan = require('morgan')

const app = express();
const http = require("http").createServer(app);

mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('DB CONNECTION ERROR: ', err));

// middlewares
app.use(express.json({limit: "4mb"}));
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));

// route middlewares
app.use('/api', authRoutes);

app.listen(8000, () => console.log('Server running on port 8000'));