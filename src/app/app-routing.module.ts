import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
const routes: Routes = [
    {
      path: ':slug',
      component: PostSingleComponent
  },
  {
    path: '',
    component: PostListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class HeadlessWPRoutingModule { }
