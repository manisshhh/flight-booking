import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BookingService } from 'src/app/shared-services/booking.service';
// import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {
  suggestionList:boolean = false
  suggestionToList:boolean = false
  selectedFromCity:any = {IATA_code: "GOI",ICAO_code: "VAGO",airport_name: "Dabolim Airport",city_name: "Goa"}
  selectedToCity:any = {IATA_code: "BLR", ICAO_code: "VOBG", airport_name: "Bengaluru International Airport",city_name:"Bangalore"}
  result_list: any;
  selectedDate = new FormControl(new Date());
  search_word = new FormControl();
  isSearch: boolean = false;
  AirPortData: any = []
  airPort: any = ''

  constructor(private bs: BookingService) { }

  ngOnInit(): void {

    this.search_word.valueChanges.pipe(switchMap(value => this.search(value))
    ).subscribe(res => {
      this.result_list = res;
    },
    err => {

    });

    this.bs.getAirports().subscribe((res: any) => {
      this.AirPortData = res[0].airports
    })
  }

  onCityClick(city:any, type: any){

    if(type == 'From'){
      this.selectedFromCity = city

    }else if(type ==  "To"){
      this.selectedToCity = city

    }
  }

  search(keyword: string): Observable<any> {

    const result = this.AirPortData.filter((e:any) =>  {
      // console.log(e.indexOf(keyword))
      return e.city_name.indexOf(keyword) !== -1
    }
      )
    return of(result)
  }

  onFromClick(event:any){
    this.suggestionToList = false
    const element = document.getElementById('searchInput')
    if(event.target != element){
    this.suggestionList = !this.suggestionList
    }
  }

  onToClick(event:any){
    this.suggestionList = false

    const element = document.getElementById('searchInput2')
    if(event.target != element){
    this.suggestionToList = !this.suggestionToList
    }
  }

  onSearch() {
    this.isSearch = true
    this.bs.fromCity = this.selectedFromCity;
    this.bs.toCity = this.selectedToCity;
  }

  backToSearch() {
    this.isSearch = false
  }
}
