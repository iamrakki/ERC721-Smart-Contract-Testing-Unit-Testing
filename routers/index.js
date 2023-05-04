const express = require("express")
const router = express.Router()

const {
    safeMint,
    approve,
    burn,
    pausecontact,
    unpausecontract,
    safeTransferFromToken,
    setApprovalForAll,
    transferFromOnetoAnother,
    transferOwnershiptoanotheruser
} = require("../controllers/index")

router.get("/safeMint", safeMint)
router.get("/approve", approve)
router.get("/burn", burn)
router.get("/transferFromOnetoAnother", transferFromOnetoAnother)
router.get("/safeTransferFromToken", safeTransferFromToken)
router.get("/pause", pausecontact)
router.get("/unpausecontract", unpausecontract)
router.get("/setApprovalForAll", setApprovalForAll)
router.get("/transferOwnershiptoanotheruser", transferOwnershiptoanotheruser)

module.exports = router