const express = require('express');
const app = express();

let PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Serving(http://localhost:${PORT}/)`);
});

