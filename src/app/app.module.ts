import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldChartComponent } from './world-chart/world-chart.component';
import { CountryVaccinesComponent } from './country-vaccines/country-vaccines.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapsModules } from './bootstraps.module';

@NgModule({
  declarations: [AppComponent, WorldChartComponent, CountryVaccinesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
    // NgbModule,
    BootstrapsModules
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
