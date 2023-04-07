import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from '../get-movies.service';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit {

  confirmData:any = [];
  confirmBookingUrl = "http://localhost:9988/users";
  confirmBookingData:any = [];

  constructor(private random:GetMoviesService){}

  ngOnInit(): void {
    this.random.getConfirmedData().subscribe(data=>{
      this.confirmData = data;
    })

    this.random.getConfirmBookingData(this.confirmBookingUrl).subscribe((data)=>{
      this.confirmBookingData = data;
      console.log(this.confirmBookingData);
    })
  }
}
