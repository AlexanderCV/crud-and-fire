import { Component, OnInit } from '@angular/core';

//Importamos el modelo
import { Post } from 'src/app/post.model';

//importamos el servicio
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  Posts: Post[];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    
    this.postService.getPost().subscribe((res)=>{
      this.Posts = res.map((e) => {
       /*  const id= e.payload.doc.id;
        const data = e.payload.doc.data() as Post;
          return {  id,...data }; */
        return{
          id: e.payload.doc.id, 
          ...(e.payload.doc.data() as Post)
        }
      })
      console.log(this.Posts);
      
    })
  }

  deleteRow = (post) => this.postService.deletePost(post);

}
