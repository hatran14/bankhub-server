const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/", async (req, res, next) => {
    const body = req.body;

    try {
        let data = JSON.stringify({
            "publicToken": body["publicToken"],
        });

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "https://sandbox.bankhub.dev/grant/exchange",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "x-client-id": process.env.X_CLIENT_ID,
                "x-secret-key": process.env.X_SECRET_KEY,
            },
            data: data,
        };
        const resData = await axios(config)
        return res.json({
            accessToken: resData.data.accessToken
        })
    } catch (error) {
        console.error(error)
    }
});

module.exports = router;
