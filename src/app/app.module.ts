import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import {HeadlessWPRoutingModule} from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeadlessWPRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
