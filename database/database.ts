import { Sequelize } from 'sequelize-typescript';
import sqlite3 from 'sqlite3';
import Domain from './models/domain';
import Keyword from './models/keyword';
import path from 'path';
import fs from 'fs';

const databasePath = path.join(__dirname, '../.next/database.sqlite');

const connection = new Sequelize({
   dialect: 'sqlite',
   host: '0.0.0.0',
   username: process.env.USER_NAME ? process.env.USER_NAME : process.env.USER,
   password: process.env.PASSWORD,
   database: 'sequelize',
   dialectModule: sqlite3,
   pool: {
      max: 5,
      min: 0,
      idle: 10000,
   },
   logging: false,
   models: [Domain, Keyword],
   storage: databasePath
});

export default connection;
