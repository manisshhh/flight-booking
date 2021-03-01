import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardLayoutComponent } from "../layouts/dashboard-layout/dashboard-layout.component";
import { SearchFlightComponent } from "./search-flight/search-flight.component";

const routes: Routes  =  [{
  path:"",
  component: DashboardLayoutComponent,
  children: [{
    path:'search',
    component:SearchFlightComponent
  }]
}]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class DashboardRoutingModule {}
