import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { User } from './user';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private http: HttpClient,
    private root: ActivatedRoute) { }//
  path: string = "https://jsonplaceholder.typicode.com/";
  posts: Post[];
  users: User[];
  userId;

  ngOnInit() {
    this.getPosts();
    this.getUsers();

  }

  getPosts() {
    debugger
    let id;
    this.root.params.subscribe(x => {
      id = x["userid"]
    });
    if (id) {
      this.http.get<Post[]>(this.path + "posts?userId=" + id).subscribe(response => {
        this.posts = response;
      });
    } else
      this.http.get<Post[]>(this.path + "posts").subscribe(response => {
        this.posts = response;
      });
  }

  getUsers() {
    this.http.get<User[]>(this.path + "users").subscribe(response => {
      this.users = response;
    });
  }

}
