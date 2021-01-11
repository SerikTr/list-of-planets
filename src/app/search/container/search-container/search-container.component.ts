import {Component} from '@angular/core';
import {SearchService} from '../../../shared/services/search.service';


@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent {

  results;
  indexP: number;

  constructor(private searchService: SearchService) {
  }

  handleSearch(inputValue: string) {
    this.searchService.getNamesPlanets(inputValue)
      .subscribe(items => {
        this.results = items;
      });
  }
}
