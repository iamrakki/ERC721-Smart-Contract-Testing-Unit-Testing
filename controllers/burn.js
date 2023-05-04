
const {burnToken} = require("../services/contractServices/burn")
async function burn(req, res, next) {
    const {data}=req.body;
    await burnToken(data);
    res.json({
        status:"Success"
    })
};

module.exports= {burn}