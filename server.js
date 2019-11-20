const express = require('express')
const dataFriends = require('./app/data/friends')



const app = express()

var PORT = process.env.PORT || 4040;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
    console.log(dataFriends)
});