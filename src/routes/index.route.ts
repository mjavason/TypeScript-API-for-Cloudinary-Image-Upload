import express, { Express, Router } from 'express';
import { MESSAGES } from '../constants';
const router = express.Router();
import uploadRoute from './v1/upload.route';

//default route
router.get("/", (req, res) => {
    res.status(200).send({ message: MESSAGES.DEFAULT, success: true });
});

router.use('/upload', uploadRoute)

export = router;