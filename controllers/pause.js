
const {pauseToken} = require("../services/contractServices/pause")
async function pausecontact(req, res, next) {
    const {data}=req.body;
    await pauseToken(data);
    res.json({
        status:"Success"
    })
};

module.exports= {pausecontact}