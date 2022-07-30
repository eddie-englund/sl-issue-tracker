import dotenv from 'dotenv'
import Express from 'express';
import { initApp } from './app';

dotenv.config();
const app = Express();
initApp(app);