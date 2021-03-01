import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DashboardLayoutComponent } from "../layouts/dashboard-layout/dashboard-layout.component";
import { SharedModule } from "../shared/shared.module";
import { DashboardRoutingModule } from "./dashoad-routing.module";
import { SearchFlightComponent } from "./search-flight/search-flight.component";
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [SearchFlightComponent,DashboardLayoutComponent, SidebarComponent],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  providers: [],
  exports:[]
})
export class DashboardModule { }
