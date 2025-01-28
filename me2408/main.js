import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Welcome to the Express server!',
    });
});

app.post('/', async (req, res) => {
    const { data } = req.body;

    if (data) {
        res.status(200).send({
            message: 'Data received successfully!',
            receivedData: data,
        });
    } else {
        res.status(400).send({
            error: 'No data provided in the request body.',
        });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Service running on http://localhost:${port}`);
});
