var questions = [ {q: "Commonly used data types do not include:", choices: ["booleans", "strings", "numbers", "alerts"], answer: "alerts"},
    {q: "The condition in an if/else statement is enclosed with _____", choices: [ "curly brackets", "square brackets", "quotes", "parenthesis"], answer: "parenthesis"},
    {q: "Arrays in JavaScript can be used to store _____", choices: ["other arrays", "numbers and strings", "booleans", "all of the above"], answer: "all of the above"},
    {q: "String values must be enclosed within ____ when being assigned to variables", choices: ["commas", "curly brackets", "parenthesis", "quotes"], answer: "quotes"},
    {q: "A very useful tool used during development and debugging for printing content to the debugger is:", choices: ["JavaScript", "terminal/bash", "for loops", "console log"], answer: "console log"}
];

const randomizer = (randomizer) => {
  const newArr = [];
  for (let i = 0; i < randomizer.length; i++) {
    const randomNum = Math.floor(Math.random() * randomizer.length)
    console.log(i)
    newArr.push(randomizer[randomNum])
    randomizer.splice(randomNum,1)
  }
  console.log(newArr)

  
}

randomizer(questions[0].choices);