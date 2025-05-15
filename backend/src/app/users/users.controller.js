const { throwIfNot } = require("../../services/throw-error-class");
const statusCodes = require("../../config/status-codes");
const statusMessages = require("../../config/status-messages");
const userService = require("./users.service");

/**
 * Method to create user
 * @param { object } req.body
 * @returns { object } data
 */
const createUser = async (req) => {
    throwIfNot(req.body, statusCodes.BAD_REQUEST, statusMessages.MISSING_CITY_DETAILS);
    const data = await userService.createUser(req.body);
    return { data };
};

/**
 * Method to update user
 * @param { object } req.body
 * @returns { object } data
 */
const updateUser = async (req) => {
    throwIfNot(req.params.id, statusCodes.BAD_REQUEST, statusMessages.CITY_ID_REQUIRED);
    throwIfNot(req.body, statusCodes.BAD_REQUEST, statusMessages.MISSING_CITY_DETAILS);
    const data = await userService.updateUser(req.body, { id: req.params.id });
    return { data };
};

/**
 * Method to get user details by id
 * @param { object } req.body
 * @returns { object } data
 */
const getUserDetails = async (req) => {
    throwIfNot(req.params.id, statusCodes.BAD_REQUEST, statusMessages.CITY_ID_REQUIRED);
    const data = await userService.getUserByCondition({ id: req.params.id });
    return { data };
};

/**
 * Method to get all users
 * @param { object } req.body
 * @returns { object } data
 */
const getAllUsers = async (req) => {
    const data = await userService.getAllUsers();
    return { data };
};

/**
 * Method to delete state by state id
 * @param { object } req.body
 * @returns { object } data
 */
const deleteUser = async (req) => {
    throwIfNot(req.params.id, statusCodes.BAD_REQUEST, statusMessages.CITY_ID_REQUIRED);
    const data = await userService.deleteUser({ id: req.params.id });
    return { data };
};

module.exports = {
    createUser,
    updateUser,
    getUserDetails,
    getAllUsers,
    deleteUser,
};