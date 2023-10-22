const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
app.use(cors());
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.db')


let sql

// create Table

// sql = 'CREATE TABLE USERS (id INTEGER PRIMARY KEY, username TEXT)';

// db.run(sql);

// add Users

// sql = 'INSERT INTO USERS (username) VALUES (?)';

// const params = ['Григорий']
// db.run(sql, params);

// request in db


app.get('/', (req, res) => {
    sql = 'SELECT * FROM USERS';
    db.all(sql, [], (error, rows) => {
        if (error) {
            console.error(error.message)
        }
        res.json(rows)
    });
});

app.listen(port, () => {
    console.log(port);
});