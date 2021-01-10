import {PlanetDescription} from '../planet-description/planet-description';

export interface PageNavigation {
  count?: number;
  next?: string;
  previous?: string;
  results?: Array<PlanetDescription>;
}
