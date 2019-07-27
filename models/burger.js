// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


// Find all the burgers
var burger = {
    selectAll: orm.selectAll("paramOne", "paramTwo", "paramThree"),

// Add a new burger to the db
    insertOne: orm.insertOne("paramOne", "paramTwo", "paramThree"),

// Find the buyer with the most pets.
    updateOne: orm.updateOne("paramOne", "paramTwo", "paramThree"),

}
// Export the database functions for the controller (catsController.js).
module.exports = burger;
