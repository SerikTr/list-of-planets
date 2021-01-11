import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageNavigation} from '../../planets-list/page-navigation';

@Injectable({
  providedIn: 'root'
})
export class SearchService {



  constructor(private httpClient: HttpClient) { }

  getNamesPlanets(query: string): Observable<any>{
    const url = `${environment.planetApiUrl}?search=${query}`;
    return this.httpClient.get<Array<PageNavigation>>(url)
  }
}
