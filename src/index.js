import 'dotenv/config';
import cors from 'cors';
import express from 'express';
console.log("Welcome to BrassServer, now with nodemon");


const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    res.send('Hello Test!!!');
});


app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}`),
);