const router = require("express").Router();
const auths = require("./authentications.controller");
const { handleResponse } = require("../../utilities/common-utils");

router.post("/auth/sign-up", handleResponse.bind(this, auths.signUp));
router.post("/auth/login", handleResponse.bind(this, auths.login));

module.exports = router;
