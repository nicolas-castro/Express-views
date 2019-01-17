const express = require('express');
const app = express();

const hbs = require('hbs');

//app.set('views', __dirname + '/views');

app.set('view engine', 'hbs');

//in order to use partials you have to register them!

hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res, next) => {

    const randomIndex = Math.floor(Math.random() * students.length);

    const data = {
      oneRandomStudent: students[randomIndex]
    }
  
  res.render('home', data);
})

app.get('/second', (req, res, next) => {
  
  res.render('secondpage', {allStudents:students});
})

app.get('/third', (req, res, next) => {
  
  res.render('thirdPage', { allStudents:students });
})


app.listen(3000, () => console.log("Listening on port 3000 :)"));

const students = [
  {
    name: "Nicolas",
    class: "Web dev",
    favoriteTopic: "Back-End"
  },

  {
    name: "Chris",
    class: "Web dev",
    favoriteTopic: "Front-End"
  },
  {
    name: "Will",
    class: "Web dev",
    favoriteTopic: ""
  }

]
