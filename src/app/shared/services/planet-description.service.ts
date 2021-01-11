import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlanetDescription} from '../../interface/planet-description';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PlanetDescriptionService {

  constructor(private http: HttpClient) {
  }

  getPlanetDescriptionUrl(id): Observable<Array<PlanetDescription>> {
    const url = `${environment.planetApiUrl}${id}`;
    return this.http.get<Array<PlanetDescription>>(url);
  }
}
