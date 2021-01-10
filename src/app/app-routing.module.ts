import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlanetsListComponent} from './planets-list/planets-list.component';
import {PlanetDescriptionComponent} from './planet-description/planet-description.component';

// http://localhost:4200/ -> PlanetsListComponent
// http://localhost:4200/planet-description/:id -> PlanetDescriptionComponent
const routes: Routes = [
  {path: '', component: PlanetsListComponent},
  {path: 'planet-description/:id', component: PlanetDescriptionComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
