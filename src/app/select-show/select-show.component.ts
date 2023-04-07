import { Component,OnInit } from '@angular/core';
import { GetMoviesService } from '../get-movies.service';

@Component({
  selector: 'app-select-show',
  templateUrl: './select-show.component.html',
  styleUrls: ['./select-show.component.css']
})
export class SelectShowComponent implements OnInit {

  movies:any = [];

  constructor(private random:GetMoviesService){}

  ngOnInit(): void {
    this.random.getBookShowList().subscribe(data=>{
      this.movies = data;
    })
  }

  handleTime(time:any){
    this.random.addToConfirm(time);
  }

  handleArea(area:any){
    this.random.addToConfirm(area);
  }

  handleMovie(movie:any){
    this.random.addToConfirm(movie);
  }
}
