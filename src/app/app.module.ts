import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchPanelComponent} from "./components/search-panel/search-panel.component";
import {DisplayPanelComponent} from "./components/display-panel/display-panel.component";
import {HomeComponent} from "./components/home/home.component";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatOptionModule} from "@angular/material/core";
import {DisplayModeToggleComponent} from "./components/display-panel/display-mode-toggle/display-mode-toggle.component";
import {DisplayUnitComponent} from "./components/display-panel/display-unit/display-unit.component";
import { ValueDisplayComponent } from './components/display-panel/value-display/value-display.component';
import { CounterAnimationComponent } from './components/display-panel/counter-animation/counter-animation.component';
import { HourlyDisplayComponent } from './components/display-panel/hourly-display/hourly-display.component';
import { HourItemComponent } from './components/display-panel/hourly-display/hour-item/hour-item.component';
import {DailyDisplayComponent} from "./components/display-panel/daily-display/daily-display.component";
import {DailyItemComponent} from "./components/display-panel/daily-display/daily-item/daily-item.component";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {LogoComponent} from "./components/shared/logo/logo.component";
import { SearchInputComponent } from './components/search-panel/search-input/search-input.component';
import { GeocodesTableComponent } from './components/search-panel/geocodes-table/geocodes-table.component';
import { BaseInfosComponent } from './components/display-panel/base-infos/base-infos.component';
import {
  CurrentTemperatureComponent
} from "./components/display-panel/current-temperature/current-temperature.component";
import { CurrentTemperatureDetailsComponent } from './components/display-panel/current-temperature-details/current-temperature-details.component';
import { IsTodayPipe } from './pipes/is-today.pipe';
import { IsNightPipe } from './pipes/is-night.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchPanelComponent,
    HomeComponent,
    DisplayPanelComponent,
    DisplayModeToggleComponent,
    DisplayUnitComponent,
    ValueDisplayComponent,
    CounterAnimationComponent,
    HourlyDisplayComponent,
    HourItemComponent,
    DailyDisplayComponent,
    DailyItemComponent,
    LogoComponent,
    SearchInputComponent,
    GeocodesTableComponent,
    BaseInfosComponent,
    CurrentTemperatureComponent,
    CurrentTemperatureDetailsComponent,
    IsTodayPipe,
    IsNightPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
