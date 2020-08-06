import knex from "knex";
const db = knex({
  client: "pg",
  connection: {
    database: "proffy",
    user: "postgres",
    password: "password",
  },
});

export default db;
