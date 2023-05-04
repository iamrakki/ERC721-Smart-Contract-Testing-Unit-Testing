
const {transferFromToken} = require("../services/contractServices/transferFrom")
async function transferFromOnetoAnother(req, res, next) {
    const {data}=req.body;
    await transferFromToken(data);
    res.json({
        status:"Success"
    })
};

module.exports= {transferFromOnetoAnother}