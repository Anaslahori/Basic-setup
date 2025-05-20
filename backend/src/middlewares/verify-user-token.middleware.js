require("dotenv").config();
const { set } = require("express-http-context");
const statusCodes = require("../config/status-codes");
const statusMessage = require("../config/status-messages");
const Users = require("../database/operation/users");
// const logger = require("../logger/logger");
const { TokenService } = require("../services/token.service");

function sendUnauthorizedResponse(_res, code, message) {
  _res.clearCookie("auth_token");
  _res.status(code).send({ message });
}

module.exports = async (...args) => {
  const [_req, _res, _next] = args?.length === 3 ? args : args.slice(1, 4);
  try {
    if (!_req.cookies?.auth_token && !_req?.headers?.authorization) {
      return sendUnauthorizedResponse(
        _res,
        statusCodes.UNAUTHORIZED,
        statusMessage.NO_AUTHORIZATION_HEADER
      );
    }
    // Read token from request cookies
    let token = _req.cookies?.auth_token;
    const tokenInCookies = !!token;
    if (!token) {
      // if not found in cookie then Read Token from Request header and check for Bearer token
      const tokenInfo = _req?.headers?.authorization?.split(" ");
      token =
        tokenInfo?.length && /^Bearer$/i.test(tokenInfo[0]) ? tokenInfo[1] : "";
      console.log("token :", token);
      if (!token) {
        return sendUnauthorizedResponse(
          _res,
          statusCodes.UNAUTHORIZED,
          statusMessage.NO_AUTHORIZATION_HEADER
        );
      }
    }

    // Decode the token and check for valid data
    const tokenData = TokenService.verifyToken(token);
    if (!tokenData?.userId) {
      return sendUnauthorizedResponse(
        _res,
        statusCodes.UNAUTHORIZED,
        statusMessage.SESSION_EXPIRED
      );
    }

    // Get User information from the
    const users = new Users();

    const [userData] = await Promise.all([
      users.findOne(
        { id: tokenData.userId },
        undefined,
        false,
        undefined,
        true
      ),
    ]);

    if (!userData?.isActive) {
      return sendUnauthorizedResponse(
        _res,
        statusCodes.UNAUTHORIZED,
        statusMessage.SESSION_EXPIRED
      );
    }

    _req.token = token;
    _req.tokenData = tokenData;
    _req.user = {
      id: tokenData.id,
      userId: userData.id,
      status: userData.isActive,
      email: userData.email,
      role: userData.role,
    };
    set("requestUser", _req.user);
    return _next();
  } catch (error) {
    console.log("err", error);
    sendUnauthorizedResponse(
      _res,
      statusCodes.INTERNAL_ERROR,
      statusMessage.INTERNAL_SERVER_ERROR
    );
  }
};
