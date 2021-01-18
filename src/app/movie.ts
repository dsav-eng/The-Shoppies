export class Movie {
    poster: string;
    title: string;
    releaseYear: string;
    imdbID: string;

    imbdRating?: string;
    director?: string;
    runtime?: string;
    cast?: string [] = [];
    awards?: string [] = [];


    constructor (poster: string, title: string, releaseYear: string, imdbID: string, 
        imbdRating? : string, director? : string, runtime?: string, cast?: string [], awards?: string [], ) {
        
        this.poster = poster;
        this.title = title;
        this.releaseYear = releaseYear;
        this.imdbID = imdbID;

        this.imbdRating = imbdRating;
        this.director = director;
        this.runtime = runtime;
        this.cast = cast;
        this.awards = awards;
        
    }


    



    isSameMovie (movie : Movie) {
        return this.imdbID === movie.imdbID ;
    };

    existsInArr (arrMovies : Movie[]) : boolean {
        let exists = false;
        for (let i = 0; i < arrMovies.length; i ++) {
            console.log (arrMovies[i].imdbID.toString() + this.imdbID.toString());
            if (arrMovies[i].imdbID.localeCompare(this.imdbID) == 0) {
                exists = true
            }
        }
        return exists;
    }
}