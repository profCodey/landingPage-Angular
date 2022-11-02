import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-half-image',
  templateUrl: './half-image.component.html',
  styleUrls: ['./half-image.component.css'],
})
export class HalfImageComponent implements OnInit {
  @Input() imageUrlLeft: string = '';
  @Input() imageUrlRight: string = '';

  constructor() {}

  ngOnInit(): void {}
}
