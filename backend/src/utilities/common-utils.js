const { validationResult } = require("express-validator");
const { HTTP_UNPROCESSABLE_ENTITY } = require("../config/status-codes");
const { BaseError } = require("../services/error-class");
const handleResponse = (...args) => {
    const [_actionFn, req, res] = args;
    const errors = validationResult(req);
    /**
     * Finds the validation errors in this request and wraps them in an object withhandy functions
    */
    if (!errors.isEmpty()) {
        return res.status(HTTP_UNPROCESSABLE_ENTITY).send({
            code: "ERR_SYSTEM",
            return_code: 1025,
            errors: errors.array({ onlyFirstError: true })
        });
    }

    let time = Date.now();
    function logTimes(isProgressive) {
        return () => {
            console.log(req.url, Date.now() - time);
            if (!isProgressive) time = Date.now();
        };
    }

    return _actionFn(req, res, logTimes()).then((data) => {
        // don't send any response to client in case res has been already sent to the client inside the controller function
        if (data?.noResponsetoClient) return true;

        if (data && typeof data === "object" && Object.hasOwn(data, "buffer")) {
            return res.sendFileSuccess(data.buffer, data.contentType, data.filename);
        } else {
            return res.success(data);
        }
    }).catch((error) => {
        error.statusCode = error.statusCode || 500;
        // Log only if error is not intentionally thrown
        if (!(error instanceof BaseError)) {
            if (error.statusCode >= 500) {
                logger.error(error);
            } else {
                logger.warn(error.message);
            }
        }
        return res.error(error);
    });
};

module.exports = {
    handleResponse
};