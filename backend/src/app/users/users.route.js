const router = require("express").Router();
const cities = require("./users.controller");
const { handleResponse } = require("../../utilities/common-utils");
const ensureAuthentications = require("../../middlewares/verify-user-token.middleware");

router.post("/users/create", ensureAuthentications, handleResponse.bind(this, cities.createCity));
router.get("/users/list", ensureAuthentications, handleResponse.bind(this, cities.getAllCities));
router.get("/users/details/:id", ensureAuthentications, handleResponse.bind(this, cities.getCityDetails));
router.put("/users/update/:id", ensureAuthentications, handleResponse.bind(this, cities.updateCity));
router.delete("/users/delete/:id", ensureAuthentications, handleResponse.bind(this, cities.deleteCity));

module.exports = router;