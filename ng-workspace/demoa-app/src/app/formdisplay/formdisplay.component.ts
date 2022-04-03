import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-formdisplay',
  templateUrl: './formdisplay.component.html',
  styleUrls: ['./formdisplay.component.css']
})
export class FormdisplayComponent implements OnInit {

  constructor() { }
  @Input()

  ngOnInit(): void {
  }

}
