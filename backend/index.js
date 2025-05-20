/* eslint-disable global-require */
require("dotenv").config();
const path = require("node:path");
const fs = require("fs");
const {
  runMigrationsAndSeeders,
} = require("./src/database/services/run-migration-seeders");
function importServerAndStart() {
  require("./src/server").startServer();
}

(async function () {
  const publicPath = path.resolve("public");
  if (!fs.existsSync(publicPath)) fs.mkdirSync(publicPath);
  await runMigrationsAndSeeders();
  importServerAndStart();
})();
