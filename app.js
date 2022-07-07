const express = require('express');
const app = express();
const port = process.env.PORT || 5000;



//End points
app.get("/game/start", (req, res) => {
    let player1 = [0, 0, 0, 0];
    let player2 = [0, 0, 0, 0];
    let player3 = [0, 0, 0, 0];
    let player4 = [0, 0, 0, 0];

    let json = [];
    const weapons = ['s', 'p', 'r'];
    var count = 2;
    let p1, p2, p3, p4;
    while (count) {
        p1 = weapons[Math.floor(Math.random() * 3)];
        p2 = weapons[Math.floor(Math.random() * 3)];
        p3 = weapons[Math.floor(Math.random() * 3)];
        p4 = weapons[Math.floor(Math.random() * 3)];




        player1[0] = player1[0] + 0;
        player2[1] = player2[1] + 0;
        player3[2] = player3[2] + 0;
        player4[3] = player4[3] + 0;

        if (p1 === 'p' && p2 === 'p') {
            player1[1] = player1[1] + 0;
            player2[0] = player2[0] + 0;

        }
        else if (p1 === 'p' && p2 === 'r') {
            player1[1] = player1[1] + 1;
            player2[0] = player2[0] + 0;


        }
        else if (p1 === 'p' && p2 === 's') {
            player1[1] = player1[1] + 0;
            player2[0] = player2[0] + 1;
        }

        else if (p1 === 'r' && p2 === 'p') {
            player1[1] = player1[1] + 0;
            player2[0] = player2[0] + 1;

        }
        else if (p1 === 'r' && p2 === 'r') {
            player1[1] = player1[1] + 0;
            player2[0] = player2[0] + 0;

        }
        else if (p1 === 'r' && p2 === 's') {
            player1[1] = player1[1] + 1;
            player2[0] = player2[0] + 0;

        }

        else if (p1 === 's' && p2 === 'p') {
            player1[1] = player1[1] + 1;
            player2[0] = player2[0] + 0;

        }
        else if (p1 === 's' && p2 === 'r') {
            player1[1] = player1[1] + 0;
            player2[0] = player2[0] + 1;
        }
        else    //(p1 === 's' && p2 === 's')
        {
            player1[1] = player1[1] + 0;
            player2[0] = player2[0] + 0;

        }
        // --------------------------------
        if (p1 === 'p' && p3 === 'p') {
            player1[2] = player1[2] + 0;
            player3[0] = player3[0] + 0;

        }
        else if (p1 === 'p' && p3 === 'r') {
            player1[2] = player1[2] + 1;
            player3[0] = player3[0] + 0;

        }
        else if (p1 === 'p' && p3 === 's') {
            player1[2] = player1[2] + 0;
            player3[0] = player3[0] + 1

        }

        else if (p1 === 'r' && p3 === 'p') {
            player1[2] = player1[2] + 0;
            player3[0] = player3[0] + 1

        }
        else if (p1 === 'r' && p3 === 'r') {
            player1[2] = player1[2] + 0;
            player3[0] = player3[0] + 0;

        }
        else if (p1 === 'r' && p3 === 's') {
            player1[2] = player1[2] + 1;
            player3[0] = player3[0] + 0;

        }

        else if (p1 === 's' && p3 === 'p') {
            player1[2] = player1[2] + 1;
            player3[0] = player3[0] + 0;


        }
        else if (p1 === 's' && p3 === 'r') {
            player1[2] = player1[2] + 0;
            player3[0] = player3[0] + 1


        }
        else    //(p1 === 's' && p3 === 's')
        {
            player1[2] = player1[2] + 0;
            player3[0] = player3[0] + 0;

        }
        // --------------------------------
        if (p1 === 'p' && p4 === 'p') {
            player1[3] = player1[3] + 0;
            player4[0] = player4[0] + 0;

        }
        else if (p1 === 'p' && p4 === 'r') {
            player1[3] = player1[3] + 1;
            player4[0] = player4[0] + 0;

        }
        else if (p1 === 'p' && p4 === 's') {
            player1[3] = player1[3] + 0;
            player4[0] = player4[0] + 1;

        }

        else if (p1 === 'r' && p4 === 'p') {
            player1[3] = player1[3] + 0;
            player4[0] = player4[0] + 1;

        }
        else if (p1 === 'r' && p4 === 'r') {
            player1[3] = player1[3] + 0;
            player4[0] = player4[0] + 0;

        }
        else if (p1 === 'r' && p4 === 's') {
            player1[3] = player1[3] + 1;
            player4[0] = player4[0] + 0;

        }

        else if (p1 === 's' && p4 === 'p') {
            player1[3] = player1[3] + 1;
            player4[0] = player4[0] + 0;

        }
        else if (p1 === 's' && p4 === 'r') {
            player1[3] = player1[3] + 0;
            player4[0] = player4[0] + 1;

        }
        else    // (p1 === 's' && p4 === 's')
        {
            player1[3] = player1[3] + 0;
            player4[0] = player4[0] + 0;

        }
        //--------------------------------------------------
        // -------------------------------------------------
        if (p2 === 'p' && p3 === 'p') {
            player2[2] = player2[2] + 0;
            player3[1] = player3[1] + 0;

        }
        else if (p2 === 'p' && p3 === 'r') {
            player2[2] = player2[2] + 1;
            player3[1] = player3[1] + 0;


        }
        else if (p2 === 'p' && p3 === 's') {
            player2[2] = player2[2] + 0;
            player3[1] = player3[1] + 1;

        }

        else if (p2 === 'r' && p3 === 'p') {
            player2[2] = player2[2] + 0;
            player3[1] = player3[1] + 1;

        }
        else if (p2 === 'r' && p3 === 'r') {
            player2[2] = player2[2] + 0;
            player3[1] = player3[1] + 0;

        }
        else if (p2 === 'r' && p3 === 's') {
            player2[2] = player2[2] + 1;
            player3[1] = player3[1] + 0;

        }

        else if (p2 === 's' && p3 === 'p') {
            player2[2] = player2[2] + 1;
            player3[1] = player3[1] + 0;

        }
        else if (p2 === 's' && p3 === 'r') {
            player2[2] = player2[2] + 0;
            player3[1] = player3[1] + 1;

        }
        else        //(p2 === 's' && p3 === 's')
        {
            player2[2] = player2[2] + 0;
            player3[1] = player3[1] + 0;

        }
        // -------------------------------------------------
        if (p2 === 'p' && p4 === 'p') {
            player2[3] = player2[3] + 0;
            player4[1] = player4[1] + 0;

        }
        else if (p2 === 'p' && p4 === 'r') {
            player2[3] = player2[3] + 1;
            player4[1] = player4[1] + 0;

        }
        else if (p2 === 'p' && p4 === 's') {
            player2[3] = player2[3] + 0;
            player4[1] = player4[1] + 1;

        }
        else if (p2 === 'r' && p4 === 'p') {
            player2[3] = player2[3] + 0;
            player4[1] = player4[1] + 1;

        }
        else if (p2 === 'r' && p4 === 'r') {
            player2[3] = player2[3] + 0;
            player4[1] = player4[1] + 0;

        }
        else if (p2 === 'r' && p4 === 's') {
            player2[3] = player2[3] + 1;
            player4[1] = player4[1] + 0;

        }
        else if (p2 === 's' && p4 === 'p') {
            player2[3] = player2[3] + 1;
            player4[1] = player4[1] + 0;

        }
        else if (p2 === 's' && p4 === 'r') {
            player2[3] = player2[3] + 0;
            player4[1] = player4[1] + 1;

        }
        else    // (p2 === 's' && p4 === 's')
        {
            player2[3] = player2[3] + 0;
            player4[1] = player4[1] + 0;

        }
        //--------------------------------------------------
        // -------------------------------------------------
        if (p3 === 'p' && p4 === 'p') {
            player3[3] = player3[3] + 0;
            player4[2] = player4[2] + 0;

        }
        else if (p3 === 'p' && p4 === 'r') {
            player3[3] = player3[3] + 1;
            player4[2] = player4[2] + 0;

        }
        else if (p3 === 'p' && p4 === 's') {
            player3[3] = player3[3] + 0;
            player4[2] = player4[2] + 1;

        }

        else if (p3 === 'r' && p4 === 'p') {
            player3[3] = player3[3] + 0;
            player4[2] = player4[2] + 1;

        }
        else if (p3 === 'r' && p4 === 'r') {
            player3[3] = player3[3] + 0;
            player4[2] = player4[2] + 0;

        }
        else if (p3 === 'r' && p4 === 's') {
            player3[3] = player3[3] + 1;
            player4[2] = player4[2] + 0;

        }
        else if (p3 === 's' && p4 === 'p') {
            player3[3] = player3[3] + 1;
            player4[2] = player4[2] + 0;

        }
        else if (p3 === 's' && p4 === 'r') {
            player3[3] = player3[3] + 0;
            player4[2] = player4[2] + 1;
        }
        else    // (p3 === 's' && p4 === 's')
        {
            player3[3] = player3[3] + 0;
            player4[2] = player4[2] + 0;

        }

        // console.log(` p1 is ${p1} p2 is ${p2} p3 is ${p3} p4 is ${p4} `)

        json.push([{ "player1": p1, "player2": p2, "player3": p3, "player4": p4 },{ player1, player2, player3, player4 }]);
        count--;

    }


    res.send(json);


})

app.listen(port, () => {
    console.log("server is runnig at " + port);
})

