import {Component, Input, OnInit} from '@angular/core';
import {PageNavigation} from '../../../planets-list/page-navigation';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  @Input() planet

  constructor() { }

  ngOnInit(): void {
  }

}
