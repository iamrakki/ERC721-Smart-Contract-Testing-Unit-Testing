const {unpauseToken} = require("../services/contractServices/unpause")
async function unpausecontract(req, res, next) {
    const {data}=req.body;
    await unpauseToken(data);
    res.json({
        status:"Success"
    })
};

module.exports= {unpausecontract}