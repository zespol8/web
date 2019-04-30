import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.css']
})
export class ImageAddComponent implements OnInit {
  selectedFile: File = null;
  constructor(private http: HttpService, private data: DataService) { }

  ngOnInit() {
  }

  imageAdd(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  uploadImage() {
    const fd = new FormData();
    fd.append('image', this.selectedFile);
    console.log('Img event id: ' + this.data.newEventId);
    console.log(fd);
    this.http.postImgAdd(this.data.accessToken, this.data.newEventId, fd).subscribe(i => {
      console.log(i);
    }, error => {
      console.log(error);
    });
  }

}
