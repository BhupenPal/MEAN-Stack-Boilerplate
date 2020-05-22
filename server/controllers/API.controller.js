module.exports = {

    GetHome: (req, res) => {
        let APIDATA = {
            "Client URL": `${req.headers.host}`,
            "Server Port": `localhost:${PORT}`,
            "Connection": 'Successful'
        }
        res.json(APIDATA)
    }

}