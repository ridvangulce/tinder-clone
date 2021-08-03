import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import Cards from "./dbCards.js"
//App Config
const app = express();
const port = process.env.PORT || 5000;
//Middlewares
app.use(express.json())
app.use(cors());
//Db Config
mongoose.connect('mongodb+srv://ridvan:<password><dbhost>',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})
//API Endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})
app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})
app.get('/tinder/card', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})


app.use(bodyParser.json());
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
