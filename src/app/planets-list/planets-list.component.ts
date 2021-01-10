import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PlanetsListService} from './planets-list.service';
import {debounceTime, delay, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  planetsList;
  pages: Array<number> = [];
  numberPage: number;
  perPage: number;
  index: number;
  totalPages: number;



  constructor(private planetsListService: PlanetsListService) {
  }

  ngOnInit() {
    this.numberPage = 1;
    this.perPage = 10;
    this.getPlanetsList();



  }

  private getPlanetsList() {
    this.planetsListService.getPlanetsList(this.numberPage)
      .pipe(delay(200))
      .subscribe(planets => {
        this.planetsList = planets;
        this.calculatePages();
        this.calculateIndex();
      });
  }

  goBackPage(event: Event) {
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

  private calculateIndex() {
    this.index = this.perPage * (this.numberPage - 1) + 2;
  }

  private calculatePages() {
    this.totalPages = Math.ceil(this.planetsList.count / this.perPage);
    this.pages = [];
    const minPage = 0;
    const maxPage = this.totalPages;
    for (let i = minPage; i < maxPage; i++) {
      this.pages.push(i);
    }
  }
}
