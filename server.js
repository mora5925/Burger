var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();
const sequelize = require("./config/connection");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
