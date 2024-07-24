import { Component, OnInit } from '@angular/core';
import { ImageComponent } from "../image/image.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ImageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  images: string[] = [];

  ngOnInit(): void {
    setInterval(() => {
      this.addImage();
    }, 500);
  }

  addImage() {
    const index = Math.floor(Math.random() * 3) + 1;
    this.images.push(`assets/${index}.jpg`);
  }
}
