const {transferOwnershipToken} = require("../services/contractServices/transferOwnership")
async function transferOwnershiptoanotheruser(req, res, next) {
    const {data}=req.body;
    await transferOwnershipToken(data);
    res.json({
        status:"Success"
    })
};

module.exports= {transferOwnershiptoanotheruser}