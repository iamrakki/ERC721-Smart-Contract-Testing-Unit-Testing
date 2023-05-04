const {approveToken} = require("../services/contractServices/approve")
async function approve(req, res, next) {
    const {data}=req.body;
    await approveToken(data);
    res.json({
        status:"Success"
    })
};

module.exports= {approve}