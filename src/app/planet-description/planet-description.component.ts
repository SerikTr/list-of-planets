import { Component, OnInit } from '@angular/core';
import {PlanetDescriptionService} from './planet-description.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-planet-description',
  templateUrl: './planet-description.component.html',
  styleUrls: ['./planet-description.component.scss']
})
export class PlanetDescriptionComponent implements OnInit {

  planetDescription;

  constructor( private planetDescriptionService: PlanetDescriptionService,
               private route: ActivatedRoute) { }

  ngOnInit(){
    this.getPlanetDescription()
  }

  private getPlanetDescription() {
      const id = this.route.snapshot.params.id;
      this.planetDescriptionService.getPlanetDescription(id)
      .subscribe(description => {
        this.planetDescription = description;
        console.log('Show id: ' ,id);
        console.log('Planet Description: ', this.planetDescription);
      })
  }

}
