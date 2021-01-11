import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PlanetsListComponent} from './planets-list/planets-list.component';
import {PlanetDescriptionComponent} from './planet-description/planet-description.component';
import {AppRoutingModule} from './app-routing.module';
import { SearchInputComponent } from './search/components/search-input/search-input.component';
import { SearchListComponent } from './search/components/search-list/search-list.component';
import { SearchContainerComponent } from './search/container/search-container/search-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    PlanetDescriptionComponent,
    SearchInputComponent,
    SearchListComponent,
    SearchContainerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
