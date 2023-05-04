const{safeMint} = require("./safeMint")
const{approve}  = require("./approve")
const{burn} = require("./burn")
const{pausecontact} = require("./pause")
const{unpausecontract} = require("./unpause")
const{safeTransferFromToken} = require("./safeTransferFrom")
const{setApprovalForAll} = require("./setApprovalForAll")
const{transferFromOnetoAnother} = require("./transferFrom")
const{transferOwnershiptoanotheruser} = require("./transferOwnership")



module.exports = {
    safeMint,
    approve,
    burn,
    pausecontact,
    unpausecontract,
    safeTransferFromToken,
    setApprovalForAll,
    transferFromOnetoAnother,
    transferOwnershiptoanotheruser
}

