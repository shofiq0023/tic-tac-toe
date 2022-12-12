import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() value: any;
  @Input() won: boolean = false;

}
