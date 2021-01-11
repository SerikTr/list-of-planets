import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class PageService {


  calculateIndex(perPage: number, numberPage: number) {
    let index = perPage * (numberPage - 1) + 2;
    return index;
  }


  calculatePages(planetsList, perPage: number, totalPages: number) {
    totalPages = Math.ceil(planetsList.count / perPage);
    let pages = [];
    const minPage = 0;
    const maxPage = totalPages;
    for (let i = minPage; i < maxPage; i++) {
      pages.push(i);
    }
    return pages;
  }

}
