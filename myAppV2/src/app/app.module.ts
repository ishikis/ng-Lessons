import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  // { path: "", component: AppComponent },
  { path: "", redirectTo: "posts", pathMatch: "full" },//Yönledirme
  { path: "nav", component: NavComponent },//test amaçlı
  { path: "posts", component: ListComponent },
  { path: "posts/:userid", component: ListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
