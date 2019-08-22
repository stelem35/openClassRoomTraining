import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.scss']
})
export class PostListComponent implements OnInit {
  @Input()  postTitle: string;
  @Input()  postContent: string;
  @Input()  postloveIts: number;
  @Input()  postCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }


  getColor(){
    if(this.postloveIts>0){
      return'green';
    }else if(this.postloveIts<0){
      return 'red';
    }
    else if(this.postloveIts===0){
    return 'black';
    }
  }

  onLoveIt(){
    this.postloveIts=this.postloveIts+1;
    console.log(this.postloveIts);
  }
  onDontLoveIt(){
    this.postloveIts=this.postloveIts-1;
    console.log(this.postloveIts);
  }
}
