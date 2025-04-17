const { Op } = require("sequelize");
const statusCodes = require("../../config/status-codes");
const statusMessages = require("../../config/status-messages");
const { throwIf, throwError, throwIfNot } = require("../../services/throw-error-class");
const userService = require("../users/users.service");
const authService = require("./authentications.service");

const signUp = async (req) => {
    throwIfNot(req.body, statusCodes.BAD_REQUEST, statusMessages.MISSING_USER_DETAILS);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    if (!emailRegex.test(req.body.email) || !mobileRegex.test(req.body.mobileNumber)) {
        throwError(statusCodes.BAD_REQUEST, statusMessages.INVALID_DETAILS);
    }
    const userAlreadyExists = await userService.userAlreadyExists({ [Op.or]: [
        { email: req.body.email },
        { mobileNumber: req.body.mobileNumber }
    ] });
    throwIf(userAlreadyExists, statusCodes.DUPLICATE, statusMessages.USER_ALREADY_EXIST);

    const data = await authService.createUser(req.body);
    return { data };
};

const login = async (req, res) => {
    const { username = "", password = "" } = req.body;
    let whereCondition = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    if (emailRegex.test(username)) {
        whereCondition = {
            email: { [Op.iLike]: username }
        };
    } else if (mobileRegex.test(username)) {
        whereCondition = {
            mobileNumber: username
        };
    } else {
        throwError(statusCodes.BAD_REQUEST, statusMessages.INVALID_DETAILS);
    }
    const isExists = await userService.getUserByCondition(whereCondition);
    throwIfNot(isExists, statusCodes.NOT_FOUND, statusMessages.USER_NOT_EXIST);

    const inputPassword = authService.encryptPassword(password, isExists.userSalt);

    if (inputPassword === isExists.password) {
        const token = authService.issueJwt({ ...JSON.parse(JSON.stringify(isExists)) });
        res.cookie("auth_token", `${token}`, { maxAge: 1800000 });
        return { message: statusMessages.LOGIN_SUCCESS };
    }
    throwError(statusCodes.BAD_REQUEST, statusMessages.INVALID_PASSWORD);
};

module.exports = {
    signUp,
    login
};