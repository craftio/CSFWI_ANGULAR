import { Artist } from '../models/artist';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { error } from 'selenium-webdriver';

// Injectable decorator.
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  api_url = 'https://btaks-csfwi-api.herokuapp.com/api';
  artistUrl = `${this.api_url}/artists`;

  constructor(
    private http: HttpClient
  ) { }

  // Create artist.


  // Read artists.
  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistUrl)
      .pipe(
        catchError(this.handleError('getArtists', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
