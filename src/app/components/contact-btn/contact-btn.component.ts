import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-btn',
  templateUrl: './contact-btn.component.html',
  styleUrls: ['./contact-btn.component.css'],
})
export class ContactBtnComponent implements OnInit {
  @Input() text: string = '';
  @Input() bgColor: string = '';
  @Input() color: string = '';
  constructor() {}

  ngOnInit(): void {}
}
