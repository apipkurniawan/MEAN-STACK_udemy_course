import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
    // styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

    postDesk: string;
    postTitle: string;

    constructor(public postService: PostService) { }

    ngOnInit(): void { }

    onAddPost(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.postService.addPost(form.value.title, form.value.deskripsi);
        form.onReset();
    }
}