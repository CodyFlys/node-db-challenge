const db = require("../data/dbConfig");

function get() {
  return db("resources");
}

function post(newResource) {
  return db("resources").insert(newResource);
}

module.exports = {
  get,
  post
};