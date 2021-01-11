import {Component, OnInit} from '@angular/core';
import {PlanetDescriptionService} from '../shared/services/planet-description.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-planet-description',
  templateUrl: './planet-description.component.html',
  styleUrls: ['./planet-description.component.scss']
})
export class PlanetDescriptionComponent implements OnInit {

  planetDescription;


  constructor(private planetDescriptionService: PlanetDescriptionService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getPlanetDescription();
  }

  private getPlanetDescription() {
    const id = this.route.snapshot.params.id;
    this.planetDescriptionService.getPlanetDescriptionUrl(id)
      .subscribe(description => {
        this.planetDescription = description;
      });
  }

}
