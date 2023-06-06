import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Character } from 'src/app/model/character';
import { Location } from 'src/app/model/location';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  readonly BASE_URL = 'https://rickandmortyapi.com/api';

  readonly CHARACTERS_URL = this.BASE_URL + '/character';

  readonly LOCATIONS_URL = this.BASE_URL + '/location';

  constructor(private http: HttpClient) {
  }

  getCharacters(): Observable<Character[]>{
    return this.http.get<any>(this.CHARACTERS_URL)
    .pipe(
      map((data: any) => data.results)
    )
  }

  getLocations(): Observable<Location[]>{
    return this.http.get<any>(this.LOCATIONS_URL)
    .pipe(
      map((data: any) => data.results)
    )
  }
}
