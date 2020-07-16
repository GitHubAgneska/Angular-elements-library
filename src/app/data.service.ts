import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public charactersList: any[];
  public dataUrl = 'assets/data/characters-data.json';

  private handleError: HandleError;

  constructor(private httpClient: HttpClient, httpErrorHandler: HttpErrorHandler) {

    this.charactersList = [];
    this.handleError = httpErrorHandler.createHandleError('DataService');
  }


  getCharactersList(): Observable<any[]> {
    return this.httpClient
      .get(this.dataUrl)
      .pipe(
        map(
          (response: Response) => {
            const rawApiResponseObject: any = response;
            const charactersListFromApi: Array<any> = rawApiResponseObject;
            return charactersListFromApi;
          }
        ),
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError('getLevelList', [])) // then handle the error
      );
  }
}
