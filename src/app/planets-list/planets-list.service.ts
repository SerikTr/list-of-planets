import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageNavigation} from './page-navigation';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PlanetsListService {
  constructor(private http: HttpClient) {
  }

  public getPlanetsList(pageNumber: number): Observable<Array<PageNavigation>> {
    const url = `${environment.planetApiUrl}?page=${pageNumber}`;
    return this.http.get<Array<PageNavigation>>(url);
  }
}
