const express = require("express");
const { links } = require("express/lib/response");
const app = express();

const port = 3000;

// GREETINGS

// app.get('/', (req, res) => {
//     console.log(req.params);
//     res.send("Hello");
// });

// app.get("/greeting/:name", (req, res) => {
//     console.log(req.params);
//     res.send("Whats up" + " " + req.params.name);
// });

// app.listen(3000, () => {
//     console.log("Express is listening for request from the browser")
// });


// TIP CALCULATOR 


// app.get("/tip/:total/:tipPercentage", (req, res) => {
//     console.log(req.params);
//     res.send(req.params.tipPercentage);
// });

// app.get("/tip/:total/:tipPercentage", (req, res) => {
//         let total = parseInt(req.params.total);
//         let tipPercentage = parseInt(req.params.tipPercentage);
//         tipTotal = (total * tipPercentage) / 100;

//         res.send("you total tip % is " + tipTotal);
//     });

// app.listen(3000, () => {
//     console.log("Express is listening for request from the browser")
// });

// MAGIC 8 BALL

// const answers = 
// ["It is certain", 
// "It is decidedly so",
//  "Without a doubt", 
//  "Yes definitely",
//  "You may rely on it",
//   "As I see it yes", 
//   "Most likely",
//    "Outlook good",
//    "Yes", "Signs point to yes", 
//    "Reply hazy try again", 
//    "Ask again later","Better not tell you now", 
//    "Cannot predict now", "Concentrate and ask again",
//    "Don't count on it", "My reply is no", 
//    "My sources say no","Outlook not so good", "Very doubtful"]


// app.get("/magic/", (req, res) => {
//     res.send("Magic 8 Ball")
// })
// app.get("/magic/:question", (req, res) => {
//     res.send(`
//    <h1>${req.params.question}</h1>
//      ${answers[Math.floor(Math.random()*answers.length)]} `)
// })

// app.listen(3000, () => {
//     console.log("Express is listening for request from the browser")
// });

// 99 bottles of beer on the wall

// app.get("/", (req, res) => {
//     res.send("99 Bottles of pop on the wall" + `,<a herf = "/98`> + "Take one down and pass it around" + `</a>`)
// });
// app.get('/-1', (req, res) => {
//     res.send(`-1 < a href= 'http://localhost/3000' > Start Over </a>`)
// });

// app.get('/:num_of_bottles', (req, res) => {
//     res.send(`${req.params.num_of_bottles} Bottles of pop on the wall
//     <a href= '${req.params.num_of_bottles-2}'> Take one down pass it around</a>`)
// });




// app.listen(3000, () => {
//     console.log("Express is listening for request from the browser")
// });
