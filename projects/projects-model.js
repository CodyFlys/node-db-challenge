const db = require("../data/dbConfig");

module.exports = {
  get,
  post,
};

function get() {
  return db("projects");
}

function post(newProject) {
  return db("projects").insert(newProject);
}