const dataFriends = require('../data/friends')

let friendCompare = (f1, f2) =>{
        
}



module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(dataFriends)
    });

    // Catch all for home page
    app.post("/api/friends", function (req, res) {
        let data = req.body






        dataFriends.push(data)
        console.log(data)
    });
};