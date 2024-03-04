const { Shape, Circle, Triangle, Square } = require('./lib/shapes');
const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      message: "What type of shape are you using?",
      name: "shape",
      choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: "input",
      message: "What color do you want for the shape?",
      name: "shapeColor",
    }, 
    {
      type: "input",
      message: "Enter text for logo",
      name: "text"
    },
    {
      type: "input",
      message: "What color do you want for the text?",
      name: "textColor"
    }
  ])
  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case 'Circle':
        shape = new Circle(answers.textColor, answers.shapeColor, answers.text);
        break;
      case 'Triangle':
        shape = new Triangle(answers.textColor, answers.shapeColor, answers.text);
        break;
      case 'Square':
        shape = new Square(answers.textColor, answers.shapeColor, answers.text);
        break;
      default:
        console.log("No shape currently selected!");
        shape = new Shape(answers.textColor, answers.shapeColor, answers.text);
        break;
    }

    const svgContent = shape.render();

    fs.writeFile("Logo.svg", svgContent, (err) =>
      err ? console.error(err) : console.log("SVG Logo & file created successfully!")
    );
  });
