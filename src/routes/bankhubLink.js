const express = require('express');
const axios = require('axios')
const router = express.Router();

router.get('/', (req, res, next) => {
    return res.json({
        grantToken: 'fsdfsdfsfdsfsfds'
    })
})

router.post('/', async (req, res, next) => {
    let data = JSON.stringify({
        "scopes": "transaction",
        "redirectUri": "http://localhost:3000",
        "language": "vi"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://sandbox.bankhub.dev/grant/token',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-client-id': process.env.X_CLIENT_ID,
            'x-secret-key': process.env.X_SECRET_KEY
        },
        data: data
    };

    const resData = await axios(config)
    const bankhub_link = `https://dev.link.bankhub.dev/?redirectUri=http://localhost:3000&grantToken=${resData.data["grantToken"]}&iframe=true`
    return res.json({
        bankhub_link: bankhub_link
    })
})

module.exports = router