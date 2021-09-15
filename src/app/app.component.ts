import { PostsService } from './services/posts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  data: Array<any>
  totalPosts:number=1
  page:number=1


  constructor(private post:PostsService){
    this.data = new Array<any>();
  }

  getPosts(){
    this.post.getData().subscribe((data) => {
        this.data = data;
        this.totalPosts = data.length;

      })
  }
}
