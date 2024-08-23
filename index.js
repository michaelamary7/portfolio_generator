import inquirer from 'inquirer';
import fs from 'fs';

const promptUser = () => {
    return inquirer.prompt(
        [
            {
                type : 'input' ,
                name : 'name' ,
                message : 'What is your name?'
            },
            {
                type : 'input' ,
                name : 'location' ,
                message : 'Where are you from?'
            }
            ,
            {
                type : 'input' ,
                name : 'bio' ,
                message : 'My bio:'
            }
            ,
            {
                type : 'input' ,
                name : 'github' ,
                message : 'Enter your Github UserName?'
            }
            ,
            {
                type : 'input' ,
                name : 'linkedin' ,
                message : 'Enter your Linkedin profile?'
            },


        ]
    )
}
const generateHTML = ({name,location,bio,github,linkedin}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" type =text/css href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>portfolio generator</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">My name is: ${name}</h1>
      <p class="lead">I'm from: ${location}.</p>
      <p class="lead">My bio: ${bio}.</p>
      <h3><span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">Github Username: ${github}</li>
        <li class="list-group-item">LinkedIn: ${linkedin}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;

const init = () => {
    promptUser()
   
       .then((answers) => fs.writeFileSync('./index.html', generateHTML(answers)))
       .then(() => console.log ("sucessfully wrote to index.html"))
       .catch((err) => console.error(err));
};

init();