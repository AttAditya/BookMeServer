const express = require('express');

const database = require('./src/database');
const apiRouter = require('./src/routes');

database.connect();
const app = express();

app.use(express.json());
app.use('/api', apiRouter);

let PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Serving(http://localhost:${PORT}/)`);
});

