import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/shared-services/booking.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orderList : any = [];
  constructor(public bookingService: BookingService) { }

  ngOnInit(): void {

    this.bookingService.getCustomers().subscribe((res: any) => {
      this.orderList = res;
    })

  }

  deleteCustomer(id:any) {
    const dataArr = this.orderList;
    const index = dataArr.findIndex((x:any) => x.id == id)
    this.orderList.splice(index, 1);

    this.bookingService.deleteCustomer(id).subscribe((res:any) => {

    })

    this.bookingService.getCustomers().subscribe((res: any) => {
      this.orderList = res;
    })
  }

}
