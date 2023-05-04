const {approveToken} = require("../services/contractServices/setApprovalForAll")
async function setApprovalForAll(req, res, next) {
    const {data}=req.body;
    await approveToken(data);
    res.json({
        status:"Success"
    })
};

module.exports= {setApprovalForAll}