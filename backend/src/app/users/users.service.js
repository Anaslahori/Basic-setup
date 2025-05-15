const { throwError } = require("../../services/throw-error-class");
const statusCodes = require("../../config/status-codes");
const statusMessages = require("../../config/status-messages");
const Users = require("../../database/operation/users");

const userAlreadyExists = async (where) => {
    try {
        const users = new Users();
        const data = await users.isAlreadyExists(where);
        console.log('data :', data);
        return data;
    } catch (error) {
        throwError(statusCodes.INTERNAL_ERROR, statusMessages.FETCH_USER_FAILURE, error);
    }
};

const getUserByCondition = async (where) => {
    try {
        const users = new Users();
        const data = await users.findOne(where);
        return data;
    } catch (error) {
        throwError(statusCodes.INTERNAL_ERROR, statusMessages.FETCH_USER_FAILURE, error);
    }
};

const createUser = async (userDetails) => {
    try {
        const users = new Users();
        const data = await users.create({ ...userDetails, ...userDetails.email && { email: userDetails.email.toLowerCase() } });
        return data;
    } catch (error) {
        throwError(statusCodes.INTERNAL_ERROR, statusMessages.CREATE_USER_FAILURE, error);
    }
};

const updateUser = async (userDetails, where) => {
    try {
        const users = new Users();
        const data = await users.update({ ...userDetails, ...userDetails.email && { email: userDetails.email.toLowerCase() } }, where);
        return data;
    } catch (error) {
        throwError(statusCodes.INTERNAL_ERROR, statusMessages.USER_UPDATE_FAILURE, error);
    }
};

const getAllUsers = async (where = {}, raw = false, attributes = undefined, isRelation = true, overRideQuery = false) => {
    try {
        const users = new Users();
        const data = await users.findAndCountAll(where, attributes, isRelation, true, undefined, raw);
        return data;
    } catch (error) {
        throwError(statusCodes.INTERNAL_ERROR, statusMessages.FETCH_USER_FAILURE, error);
    }
};

const deleteUser = async (where) => {
    try {
        const users = new Users();
        const data = await users.delete(where);
        return data;
    } catch (error) {
        throwError(statusCodes.INTERNAL_ERROR, statusMessages.DELETE_CITY_FAILURE, error);
    }
};

module.exports = {
    userAlreadyExists,
    createUser,
    getUserByCondition,
    updateUser,
    getAllUsers,
    deleteUser
};
