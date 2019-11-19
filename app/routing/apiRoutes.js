const dataFriends = require('../data/friends')

let friendCompare = (f1, f2) =>{
        let friend1 = f1.scores
        let friend2 = f2.scores
        let diff = 0;
        for (let i in friend1) {
            console.log(i)
            diff += Math.abs(friend1[i] - friend2[i])
        }
        return diff
}



module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(dataFriends)
    });

    // Catch all for home page
    app.post("/api/friends", function (req, res) {
        

        





        dataFriends.push(req.body)
        console.log(req.body)
    });
};