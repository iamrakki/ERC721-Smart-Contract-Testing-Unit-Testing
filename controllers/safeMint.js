
const {mintToken} = require("../services/contractServices/safeMint")
async function safeMint(req, res, next) {
    const {data}=req.body;
    await mintToken(data);
    res.json({
        status:"Success"
    })
};

module.exports= {safeMint}