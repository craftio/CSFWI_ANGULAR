import { Genre } from '../models/genre';

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {error} from 'selenium-webdriver';

// RxJS operator for mapping the observable.
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  api_url = 'https://btaks-csfwi-api.herokuapp.com/api';
  genreUrl = `${this.api_url}/genres`;

  constructor(
    private http: HttpClient
  ) { }

  // Create genre.
  createGenre(genre: Genre): Observable<any> {
    // Returns the observable of the http post request.
    return this.http.post(`${this.genreUrl}`, genre);
  }

  // Read genres.
  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genreUrl)
      .pipe(
        catchError(this.handleError('getGenres', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
