import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-full-image',
  templateUrl: './full-image.component.html',
  styleUrls: ['./full-image.component.css'],
})
export class FullImageComponent implements OnInit {
  @Input() imageUrl: string = '';

  constructor() {}

  ngOnInit(): void {}
}
