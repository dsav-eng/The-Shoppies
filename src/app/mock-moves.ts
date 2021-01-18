import { Movie } from './movie';

let m1 = new Movie ('movie1', 'movie1', 'movie1','movie1','movie1','movie1', 'img');
let m2 = new Movie ('movie2', 'movie2', 'movie2','movie2','movie2','movie2', 'img');
let m3 = new Movie ('movie3', 'movie3', 'movie3','movie3','movie3','movie3', 'img');
let m4 = new Movie ('movie4', 'movie4', 'movie4','movie4','movie4','movie4', 'img');
let m5 = new Movie ('movie5', 'movie5', 'movie5','movie5','movie5','movie5', 'img');


export const MOVIES: Movie [] = [];
MOVIES.push(m1);
MOVIES.push(m2);
MOVIES.push(m3);
MOVIES.push(m4);
MOVIES.push(m5);