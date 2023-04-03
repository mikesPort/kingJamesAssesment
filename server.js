const express = require('express');
const axios = require("./getFunction");
const app = express();
const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', async (req, res) => {
    const data = await axios.getFunction();
    res.send(data);
}); 