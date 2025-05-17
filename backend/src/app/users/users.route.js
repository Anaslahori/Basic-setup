const router = require("express").Router();
const users = require("./users.controller");
const { handleResponse } = require("../../utilities/common-utils");
const ensureAuthentications = require("../../middlewares/verify-user-token.middleware");

router.post("/users/create", ensureAuthentications, handleResponse.bind(this, users.createUser));
router.get("/users/list", ensureAuthentications, handleResponse.bind(this, users.getAllUsers ));
router.get("/users/details/:id", ensureAuthentications, handleResponse.bind(this, users.getUserDetails));
router.put("/users/update/:id", ensureAuthentications, handleResponse.bind(this, users.updateUser));
router.delete("/users/delete/:id", ensureAuthentications, handleResponse.bind(this, users.deleteUser));

module.exports = router;