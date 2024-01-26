import 'dotenv/config';

const ENV = process.env;
const PORT: number = parseInt(ENV.PORT as string, 10);

const config = {
  node_env: ENV.NODE_ENV || 'production',
  port: PORT || 3000,
  dbHost: ENV.DB_HOSTNAME,
  dbPort: parseInt(ENV.DB_PORT as string),
  dbUser: ENV.DB_USERNAME,
  dbPassword: ENV.DB_PASSWORD,
  dbName: ENV.DB_DB_NAME
};

export default config;
