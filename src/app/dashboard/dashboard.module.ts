import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DashboardLayoutComponent } from "../layouts/dashboard-layout/dashboard-layout.component";
import { SharedModule } from "../shared/shared.module";
import { DashboardRoutingModule } from "./dashoad-routing.module";
import { SearchFlightComponent } from "./search-flight/search-flight.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { TicetBookingComponent } from './ticet-booking/ticet-booking.component';
import { RenderTicketComponent } from './render-ticket/render-ticket.component';
import { OrdersComponent } from './orders/orders.component';
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [SearchFlightComponent,DashboardLayoutComponent, SidebarComponent, CancelTicketComponent, ContactComponent, TicetBookingComponent, RenderTicketComponent, OrdersComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ToastrModule,
    SharedModule,
    DashboardRoutingModule
  ],
  providers: [],
  exports:[]
})
export class DashboardModule { }
