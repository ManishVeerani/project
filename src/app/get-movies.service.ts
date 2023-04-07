import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {
  //add Form data to DB
  addUserUrl = "http://localhost:9988/user";

  addUser(mobile, email, noOfSeats, totalPrice) {
    return this.http.post(this.addUserUrl,{
      mobile,
      email,
      noOfSeats,
      totalPrice
    });
  }


  // To see particular Movies after clicking Book Show
  bookShowList:any = [];
  movieList = new BehaviorSubject<any>([]);


  // To see the selected movie area and time after clicking submit A&T
  confirmSelectedMovieShow:any = [];
  confirmMovieList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  public getAllMovies(movieUrl:string){
    return this.http.get(movieUrl);
  }

  public getAllCities(cityUrl:string){
    return this.http.get(cityUrl);
  }

  public getCityRelatedMovies(cityRelatedMovieUrl:string){
    return this.http.get(cityRelatedMovieUrl);
  }

  public getConfirmBookingData(confirmBookingUrl:string){
    return this.http.get(confirmBookingUrl);
  }


  // To see particular Movies after clicking Book Show
  public getBookShowList(){
    return this.movieList.asObservable();
  }

  public setBookShowList(movie:any){
    this.bookShowList.push(...movie);
    this.movieList.next(movie);
  }

  public addToBookShow(movie:any){
    this.bookShowList.push(movie);
    this.movieList.next(this.bookShowList);
    console.log(this.bookShowList);
  }


  // To see the selected movie area and time after clicking submit A&T
  public getConfirmedData(){
   return this.confirmMovieList.asObservable();
  }

  public setConfirmedData(movie:any){
    this.confirmSelectedMovieShow.push(...movie);
    this.confirmMovieList.next(movie);
  }

  public addToConfirm(movie:any){
    this.confirmSelectedMovieShow.push(movie);
    this.confirmMovieList.next(this.confirmSelectedMovieShow);
    console.log(this.confirmSelectedMovieShow);
  }


}
