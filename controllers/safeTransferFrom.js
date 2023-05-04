
const {transferFromToken} = require("../services/contractServices/safeTransferFrom")
async function safeTransferFromToken(req, res, next) {
    const {data}=req.body;
    await transferFromToken(data);
    res.json({
        status:"Success"
    })
};

module.exports= {safeTransferFromToken}