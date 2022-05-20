const express = require("express")
const app = express();

const port = 3000;

// GREETINGS

// app.get('/', (req, res) => {
//     console.log("Oh hey! I got a request. Let me respond with ssomething");
//     req.send("Hello");
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
//      ${answers[Math.floor(Math.random()*answers.length)]}
        
//          `)
// })

// app.listen(3000, () => {
//     console.log("Express is listening for request from the browser")
// });

// 99 bottles of beer on the wall

app.get("/", (req, res) => {
    res.send("99 Bottles of beer on the wall")
})



app.listen(3000, () => {
    console.log("Express is listening for request from the browser")
});
