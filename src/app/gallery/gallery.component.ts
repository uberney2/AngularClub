import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  showImage : boolean = false;
  routeImage : string =""
  ngOnInit(): void {
  }

  showImages(routeImagen : string) {
    this.showImage = true;
    this.routeImage = routeImagen;

  }

  hideImage(){
    this.showImage = false;
  }
}
