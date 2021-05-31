import {tournamentWinner} from './src/TournamentWinner';

const competitions = [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"]
  ];
const results = [0,1,1];
console.log("Test");
console.log(tournamentWinner(competitions,results));