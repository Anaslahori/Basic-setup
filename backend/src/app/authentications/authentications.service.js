const statusCodes = require("../../config/status-codes");
const statusMessages = require("../../config/status-messages");
// const { Encryption } = require("../../services/encryption.service");
const { throwError } = require("../../services/throw-error-class");
const crypto = require("node:crypto");
// const { TokenService } = require("../../services/token.service");
const userService = require("../users/users.service");
const { TokenService } = require("../../services/token.service");

// later on these two function moved to the encryption.service.js file
const encryptPassword = (password, usersalt = "") => {
  return crypto
    .scryptSync(password, usersalt, 64, { N: 1024, r: 8, p: 16 })
    .toString("hex");
};

const makeUserSalt = (length) => {
  return crypto.randomBytes(length).toString("hex").slice(0, length);
};

const createUser = async (userDetails) => {
  try {
    const userSalt = makeUserSalt(16);
    const password = encryptPassword(userDetails.password, userSalt);
    const user = await userService.createUser({
      ...userDetails,
      password,
      userSalt,
    });
    return user;
  } catch (error) {
    throwError(statusCodes.INTERNAL_ERROR, statusMessages.CREATE_USER_FAILURE);
  }
};

const issueJwt = function (userData = {}) {
  try {
    const tokenizeObj = {
      userId: userData.id,
      mobileNumber: userData.mobileNumber,
      email: userData.email,
      time: new Date().getTime(),
    };
    return TokenService.issueToken(tokenizeObj);
  } catch (error) {
    throwError(statusCodes.INTERNAL_ERROR, statusMessages.TOKEN_NOT_FOUND);
  }
};

module.exports = {
  createUser,
  issueJwt,
  encryptPassword,
};
