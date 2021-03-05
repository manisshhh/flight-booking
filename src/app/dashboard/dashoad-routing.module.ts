import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardLayoutComponent } from "../layouts/dashboard-layout/dashboard-layout.component";
import { ContactComponent } from "./contact/contact.component";
import { OrdersComponent } from "./orders/orders.component";
import { SearchFlightComponent } from "./search-flight/search-flight.component";
import { TicetBookingComponent } from "./ticet-booking/ticet-booking.component";

const routes: Routes  =  [{
  path:"",
  component: DashboardLayoutComponent,
  children: [
    {
      path:'',
      redirectTo:'search',
      pathMatch:'full'
    },
    {
    path:'search',
    component:SearchFlightComponent
    },
    {
    path:'contact',
    component:ContactComponent
    },
    {
    path:'ticket-booking/:1',
    component:TicetBookingComponent

    },
    {
    path:'orders',
    component:OrdersComponent
    }
]
}]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class DashboardRoutingModule {}
