import path from "path";

module.exports = {
  client: "pg",
  connection: {
    database: "proffy",
    user: "postgres",
    password: "password",
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
};
