const router = require("express").Router();
const userCotoller = require("../controllers/view.controller");

router.post("/", userCotoller.createView);
router.get("/", userCotoller.getAllViews);

module.exports = router;