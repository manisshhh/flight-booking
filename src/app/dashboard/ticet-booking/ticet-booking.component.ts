import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookingService } from 'src/app/shared-services/booking.service';

@Component({
  selector: 'app-ticet-booking',
  templateUrl: './ticet-booking.component.html',
  styleUrls: ['./ticet-booking.component.scss']
})
export class TicetBookingComponent implements OnInit {

  customerForm: FormGroup = this.fb.group({})
  isEdit: Boolean = false;
  msg:String = '';
  customerList: any;
  isSubmited: boolean = false

  constructor(
    private bookingService: BookingService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ){}

  ngOnInit(){
    this.customerForm = new FormGroup({
      name: new FormControl('',Validators.required),
      id: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
      _id: new FormControl(''),
      to_city: new FormControl(this.bookingService.toCity.city_name),
      from_city: new FormControl(this.bookingService.fromCity.city_name)
    })


    this.bookingService.getCustomers().subscribe((res: any) => {
      this.customerList = res;
    })

  }

  resetForm(){

    this.customerForm.reset();
  }

  add(){
    if(this.customerForm.valid){
      this.bookingService.addCustomers(this.customerForm.value).subscribe((res:any) => {

      })
      // this.bookingService.customerList.push(this.customerForm.value);
      this.bookingService.getCustomers().subscribe((res: any) => {
        this.customerList = res;
      })
      this.resetForm();
      this.isSubmited = true;
      this.toastr.success('Your Flight has been booked ','Success')
      this.router.navigate(['/dashboard/orders'])

    }
      else {
      this.toastr.error('Please fill all required fields ','Warning')

    }
  }

  edit(id: any){
    if(id){
      let customer: any;
      this.customerList.map((val: any) => {
        if(val._id == id) customer = val;
      });


      if(customer){

        this.customerForm.patchValue(customer)
        this.isEdit = true;
        }
    }
  }

  update() {
    let obj = {
      name: this.customerForm.value.name,
      id: this.customerForm.value.id,
      address: this.customerForm.value.address,
      gender: this.customerForm.value.gender,
      _id: this.customerForm.value._id
    }
       const index = this.customerList.findIndex((x:any) => x.id == obj.id)
       this.customerList.splice(index, 1, obj);


       this.bookingService.updateCustomer(obj).subscribe((res:any) => {

       })
       this.customerForm.reset()
       this.isEdit = false;
  }

  deleteCustomer(id:any) {
    const dataArr = this.customerList;
    const index = dataArr.findIndex((x:any) => x.id == id)
    this.customerList.splice(index, 1);

    this.bookingService.deleteCustomer(id).subscribe((res:any) => {

    })

    this.bookingService.getCustomers().subscribe((res: any) => {
      this.customerList = res;
    })
  }

}
