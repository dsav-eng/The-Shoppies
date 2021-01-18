import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MOVIES } from '../mock-moves';
import { Movie } from '../movie';

import { MovieSearchService} from '../movie-search.service';

@Component({
  selector: 'app-search-for-movie',
  templateUrl: './search-for-movie.component.html',
  styleUrls: ['./search-for-movie.component.css']
})
export class SearchForMovieComponent implements OnInit {
  existsInList = false;
  listFull = false;
  moviesList: Movie [] = [];

  movies = MOVIES;
  favorites : Movie [] = [];

  movieSearchResults;

  movieTitle = new FormControl('');
  constructor (private movieSerachService: MovieSearchService) { }

  addToList (movie: Movie) {
    if (this.favorites.length === 0) this.favorites.push(movie);
    else if (this.favorites.length < 5) {
        if (movie.existsInArr (this.favorites)== false) this.favorites.push(movie);
        else this.existsInList = true;
    }
    else {
    this.listFull = true;
    console.log ('tooooooo much');
    }
  }
  
  removeFromList (movie : Movie) {
    let newCount = 0;
    for (let i = 0; i < this.favorites.length; i ++) {
      const favMovie = this.favorites[i];
      if (favMovie.imdbID.localeCompare(movie.imdbID) !== 0) {
        this.favorites[newCount] = favMovie;
        newCount ++;
      }
    }
    this.favorites.length = newCount;
    this.listFull = false;
  }

  clearList () {
    this.favorites = [];
  }


  seachOMDb(): void {
    console.log('movieTitle :' + this.movieTitle.value);

    this.movieSerachService.getDataFromServer(this.movieTitle.value).subscribe(
      (response) => {
        this.moviesList = [];
        console.log('I recevied response from server in net line :');
        this.movieSearchResults = response;
        console.log(this.movieSearchResults);
        response.forEach((element) => {
          console.log(element.Poster);

          let movie = new Movie (element.Poster, element.Title, element.Year, element.imdbID);
          console.log('title' + movie.title)
          this.moviesList.push(movie)
        });
        console.log('moviesList in net line :');
       // console.log(this.moviesList);


        
      },
      (error) => 'The request to server failed'
    );

    
 
  }


  ngOnInit(): void {
  }

}
