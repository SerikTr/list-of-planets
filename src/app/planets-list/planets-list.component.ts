import {Component, OnInit} from '@angular/core';
import {delay} from 'rxjs/operators';
import {PageService} from '../shared/services/page.service';
import {PlanetsListService} from '../shared/services/planets-list.services';


@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  planetsList;
  pages: Array<number> = [];
  numberPage: number = 1;
  perPage: number = 10;
  index: number;
  totalPages: number;


  constructor(private planetsListService: PlanetsListService,
              private pageService: PageService) {
  }

  ngOnInit() {
    this.getPlanetsList();
  }

  private getPlanetsList() {
    this.planetsListService.getPlanetsList(this.numberPage)
      .pipe(delay(200))
      .subscribe(planets => {
        this.planetsList = planets;
        this.pages = this.pageService.calculatePages(this.planetsList, this.perPage, this.totalPages);
        this.index = this.pageService.calculateIndex(this.perPage, this.numberPage);
      });
  }

  goPreviousPage(event: Event) {
    event.preventDefault();
    if (this.numberPage > 1) {
      this.numberPage--;
      this.getPlanetsList();
    }
  }

  goToPage(page: number, event: Event) {
    event.preventDefault();
    this.numberPage = page;
    this.getPlanetsList();
  }


  goNextPage(event: Event) {
    event.preventDefault();
    if (this.numberPage < this.pages.length) {
      this.numberPage++;
      this.getPlanetsList();
    }
  }
}
