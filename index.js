const express = require('express');
const app=express();

app.get('/', (req, res) => {
  
    const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');
    sdk.auth('rnd_3WJak6rj6qUVf7qY6jEkZZSEwzXm');
    sdk.getServices({limit: '20'})
    .then(({ data }) => res.send(data))
    .catch(err => res.send(err))
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('http://localhost:3000');
});
  