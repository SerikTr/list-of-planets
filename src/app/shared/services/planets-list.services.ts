import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import { PageNavigation } from 'src/app/interface/page-navigation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PlanetsListService {
  constructor(private http: HttpClient) {
  }

  public getPlanetsList(pageNumber: number): Observable<Array<PageNavigation>> {
    const url = `${environment.planetApiUrl}?page=${pageNumber}`;
    localStorage.setItem('url', url);
    return this.http.get<Array<PageNavigation>>(url);
  }
}
