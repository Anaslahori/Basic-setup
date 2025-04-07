/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");
const fileUpload = require("express-fileupload");
const { middleware } = require("express-http-context");
const cookieParser = require("cookie-parser");
const { loadRoutesAndMiddleware } = require("./utilities/server-utill");

const app = express();
app.use(middleware);
app.use(cors({
    origin: process.env.APP_HOST || "*",
    methods: "GET,PUT,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    exposedHeaders: ["Content-Disposition", "FileLength"]
}));
app.use(require("./middlewares/response-handler.middleware"));

app.use(fileUpload());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
loadRoutesAndMiddleware(app);

module.exports = app;
