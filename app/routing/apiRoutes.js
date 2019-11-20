const dataFriends = require('../data/friends')

let friendCompare = (f1, f2) =>{
        let diff = 0;
        for (let i in f1) {
            console.log(i)
            diff += Math.abs(parseInt(f1[i]) - f2[i])
        }
        return diff
}



module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(dataFriends)
    });

    // Catch all for home page
    app.post("/api/friends", function (req, res) {
        let friendNew = req.body;
        let bestScore = 41;
        let bestMatch;

        //Compare friends
        for (let i in dataFriends) {
            let score = friendCompare(friendNew.scores, dataFriends[i].scores);
            console.log("Score for " + dataFriends[i].name + ": " + score);
            if (score < bestScore) {
                bestMatch = dataFriends[i];
                bestScore = score;
            }
        }

        console.log("Best Match:");
        console.log(bestMatch);

        // Return best match
        dataFriends.push(friendNew);
        res.json(bestMatch);

        





        // dataFriends.push(req.body)
        console.log(req.body)
    });
};