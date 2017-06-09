import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css'],
  providers: [PostsService]
})
export class PostSingleComponent implements OnInit {

  post: Post;

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  getPost(slug) {
    console.log('getPost :: Post-SingleComponent' + slug);
    this.postsService.getPost(slug).subscribe(res => {
      this.post = res[0];
    });
  }
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const slug = params['slug'];
      console.log('ngOnInit :: Post-SingleComponent' + slug);
      this.getPost(slug);
    });
  }

}
