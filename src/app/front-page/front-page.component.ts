import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from '../get-movies.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  movieUrl= "http://localhost:9988/movies";
  moviesData:any = [];

  cityUrl = "http://localhost:9988/cities";
  citiesData:any = [];

  dropDownValue;

  cityRelatedMovieUrl = "http://localhost:9988/cities/query/?search=Pune";
  cityRelatedMovieData:any = [];


  constructor(private random:GetMoviesService){}


  ngOnInit(): void {
    this.random.getAllMovies(this.movieUrl).subscribe((data)=>{
      this.moviesData = data;
      // console.log(data);
    });

    this.random.getAllCities(this.cityUrl).subscribe((data)=>{
      this.citiesData = data;
      // console.log(data);
    })

    this.random.getCityRelatedMovies(this.cityRelatedMovieUrl).subscribe((data)=>{
      this.cityRelatedMovieData = data;
      // console.log(this.cityRelatedMovieData);
    })

  }

  public selectValue(e){
    e.preventDefault();
    this.dropDownValue = e.target.value;
    console.log(this.dropDownValue);
  }

  public onSubmit(){
    this.cityRelatedMovieUrl = `http://localhost:9988/cities/query/?search=${this.dropDownValue}`;
    this.random.getCityRelatedMovies(this.cityRelatedMovieUrl).subscribe((data)=>{
      this.cityRelatedMovieData = data;
      console.log(this.cityRelatedMovieData);
  })
}

}
