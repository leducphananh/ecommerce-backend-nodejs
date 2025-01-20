const config = {
  app: {
    port: process.env.PORT || 3055,
  },
  db: {
    host: process.env.MONGO_DB_HOST || "localhost",
    port: process.env.MONGO_DB_PORT || "27017",
    name: process.env.MONGO_DB_NAME || "shopDEV",
  },
};

module.exports = config;
