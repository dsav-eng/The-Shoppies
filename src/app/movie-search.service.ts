import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

  constructor(private http: HttpClient) {}

  getDataFromServer(title): Observable<any> {
    return this.http
      .get('http://www.omdbapi.com/?i=tt3896198&apikey=f6969ef6&s=' + title)
      .pipe(
        map((res: any) => {
          return res.Search;
        })
      );
  }

}
