import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';
import { Post } from './posts';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private rout: ActivatedRoute,
    private alert: AlertifyService
  ) { }
  users: User[];

  posts: Post[];

  path: string = "https://jsonplaceholder.typicode.com/";

  ngOnInit() {
    this.rout.params.subscribe(x => {

      this.getPost(x["userid"]);

    });

    this.getUser();
  }


  getUser() {
    this.http.get<User[]>(this.path + "users").subscribe(x => { this.users = x });
  }

  getPost(uid) {

    if (uid)
      this.http.get<Post[]>(this.path + "posts?userId=" + uid).subscribe(x => { this.posts = x });
    else
      this.http.get<Post[]>(this.path + "posts").subscribe(x => { this.posts = x });
  }

  addFav(msg) {
    this.alert.success(msg)
  }
}
