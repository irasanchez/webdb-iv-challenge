const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile");

const db = knex(knexConfig.development);

const server = express();
server.use(express.json());

server.listen(8000, () => console.log("running on port 8000"));
