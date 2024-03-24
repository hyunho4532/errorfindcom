const express = require('express');
const https = require('https');

const app = express();

app.listen(50000, (response) => {
    https.get('https://czwpwf5o4m.execute-api.ap-northeast-2.amazonaws.com/stage/error/write', (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;

            console.log(data);
        });
    }).on('error', (error) => {
        console.error(error);
    })
})