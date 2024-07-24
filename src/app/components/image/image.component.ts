import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent implements OnInit, AfterViewInit{
  @Input() url!: string;
  x: number = 0;
  y: number = 0;
  speedX: number = 2;
  speedY: number = 2;
  widthImg: number = 0;
  heightImg: number = 0;

  @ViewChild('imageElement', { static: true }) imageElement!: ElementRef;

  ngOnInit(): void {
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;

    this.x = Math.random() * (maxWidth);
    this.y = Math.random() * (maxHeight);

    this.speedX = (Math.random() * 6 - 3);
    this.speedY = (Math.random() * 6 - 3);

    requestAnimationFrame(() => this.move());
  }

  ngAfterViewInit(): void {
    const img = this.imageElement.nativeElement as HTMLImageElement;
    const imgStyle = getComputedStyle(img);
    const imageWidth = imgStyle.width;
    const imageHeight = imgStyle.height;

    this.widthImg = parseFloat(imageWidth);
    this.heightImg = parseFloat(imageHeight);

    const maxWidth = window.innerWidth - this.widthImg;
    const maxHeight = window.innerHeight - this.heightImg;

    this.x = Math.random() * (maxWidth);
    this.y = Math.random() * (maxHeight);

    this.speedX = (Math.random() * 6 - 3);
    this.speedY = (Math.random() * 6 - 3);

    requestAnimationFrame(() => this.move());
  }

  move() {
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;

    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x <= 0 || this.x >= maxWidth - this.widthImg) {
      this.speedX = -this.speedX;
    }
    if (this.y <= 0 || this.y >= maxHeight - this.heightImg) {
      this.speedY = -this.speedY;
    }

    requestAnimationFrame(() => this.move());
  }
}
