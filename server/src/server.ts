import express from  'express';

const app = express();

app.get('/users', (request, response) => {
    console.log("Listagem");
    response.json(["nana", "eu" , "ana"]);
});

app.listen(3333);