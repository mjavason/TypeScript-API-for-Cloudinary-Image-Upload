import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { LINKS, MESSAGES } from './src/constants'
import rootRoute from './src/routes/index.route'

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//documentation redirect
app.get("/docs", (req, res) => {
    res.redirect(LINKS.USER_DOCUMENTATION);
});

//default route
app.get("/", (req, res) => {
    res.status(200).send({ message: MESSAGES.DEFAULT, success: true });
});

//all requests of all types are pushed to this route to be handled
app.use('/api/v1', rootRoute);


export = app;
