import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { Character } from './models/character.model';

/* export class Character {
  public id?: string | number;
  public firstName: string;
  public lastName: string;
  public location: string;
  public origin: string;
  public occupation: string;
  public quote: string;
  public img: string;
  public imgUrl: string;
  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.location = '';
    this.origin = '';
    this.occupation = '';
    this.quote = '';
    this.img = '';
    this.imgUrl = '';
  }
} */


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public character: Character;
  public charactersList: Character[];

  public dataUrl = 'assets/data/characters-data.json';

  private handleError: HandleError;

  constructor(private httpClient: HttpClient, httpErrorHandler: HttpErrorHandler) {

    this.character = new Character();
    this.charactersList = [];
    this.handleError = httpErrorHandler.createHandleError('DataService');
  }


  getCharactersList(): Observable<Character[]> {
    return this.httpClient
      .get(this.dataUrl)
      .pipe(
        map(
          (response: Response) => {
            console.log('response=', response);

            const rawApiResponseObject: any = response;
            const charactersListFromApi: Array<any> = rawApiResponseObject;
            return charactersListFromApi;
          }
        ),
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError('getCharList', [])) // then handle the error
      );
  }
}
