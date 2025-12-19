const router = require("express").Router();

const { login, registerService } = require("../service");

router.post("/login", login);
router.post("/register", registerService);

module.exports = router;
