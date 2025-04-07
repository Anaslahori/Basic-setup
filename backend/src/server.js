const http = require("http");
const DataBaseConnection = require("./database/database-connection.service");
const { HTTP_PORT } = process.env;

const startServer = async () => {
  await DataBaseConnection.createDatabaseConnection();
  // eslint-disable-next-line global-require
  const app = require("./app");
  let secureServer = null;
  secureServer = http.createServer(app);
  secureServer.listen(HTTP_PORT, "0.0.0.0", function () {
    console.log(`Server is listening on port ${HTTP_PORT}`);
  });
};

module.exports = {
  startServer,
};
