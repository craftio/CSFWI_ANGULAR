import { Genre } from '../models/genre';

import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {error} from 'selenium-webdriver';

// RxJS operator for mapping the observable.
//import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


// Injectable decorator.
import { Injectable } from '@angular/core';
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
  createGenre(genre: Genre): Observable<Genre> {
    // Returns the observable of the http post request.
    return this.http.post<Genre>(`${this.genreUrl}`, genre, httpOptions)
      .pipe(
        catchError(this.handleError<Genre>('createGenre'))
      );
  }

  // Read genres.
  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genreUrl)
      .pipe(
        catchError(this.handleError('getGenres', []))
      );
  }

  getGenre(_id: string): Observable<Genre> {
    const _url = `${this.genreUrl}/${_id}`;
    return this.http.get<Genre>(_url)
      .pipe(
      catchError(this.handleError<Genre>(`getGenre id=${_id}`))
    );
  }

  // Update genre.
  updateGenre(genre: Genre | string): Observable<Genre> {
    const _id = typeof genre === 'string' ? genre : genre._id;
    const url = `${this.genreUrl}/${_id}`;
    return this.http.put(url, genre, httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateGenre'))
      );
  }

  // Delete genre.
  deleteGenre(genre: Genre | string): Observable<Genre> {
    const _id = typeof genre === 'string' ? genre : genre._id;
    const url = `${this.genreUrl}/${_id}`;

    return this.http.delete<Genre>(url, httpOptions)
      .pipe(
      catchError(this.handleError<Genre>('deleteGenre'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
