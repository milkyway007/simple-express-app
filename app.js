const express = require('express');
const app = express();
const PORT = 5000;

app.get('/hello', function(request, response) {
    response.send('Hello world!');
})

app.listen(PORT, function() {
    console.log('Server is running on PORT 5000');
})