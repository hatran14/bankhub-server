const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get('/', (req, res, next) => {

    res.send('server is running')
    return res.json({
        grantToken: 'fsdfsdfsfdsfsfds'
    })
})

router.post("/", async (req, res, next) => {
    const body = req.body;
    try {
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: "https://sandbox.bankhub.dev/transactions",
            headers: {
                "Accept": "application/json",
                "x-client-id": process.env.X_CLIENT_ID,
                "x-secret-key": process.env.X_SECRET_KEY,
                "Authorization": body.accessToken,
            },
        };

        const resData = await axios(config)
        // console.log(resData.data)
        return res.json({
            data: resData.data
        })
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;
