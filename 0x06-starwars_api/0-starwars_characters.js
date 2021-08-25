//import request
const request = require('request');

let endpoint = 'https://swapi-api.hbtn.io/api';
let filmId = process.argv[2];

request(`${endpoint}/films/${filmId}/`, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    let characters = JSON.parse(body).characters;

    characters.forEach((character) => {
      request(character, (error, response, body) => {
        if (error) {
          console.log(error);
        } else {
          console.log(JSON.parse(body).name);
        }
      });
    });
  }
});
