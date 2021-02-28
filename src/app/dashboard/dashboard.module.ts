import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardRoutingModule } from "./dashoad-routing.module";
import { SearchFlightComponent } from "./search-flight/search-flight.component";

@NgModule({
  declarations: [SearchFlightComponent,DashboardComponent],
  imports: [
    BrowserModule,
    DashboardRoutingModule
  ],
  providers: [],
  exports:[]
})
export class DashboardModule { }
