import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../models/Country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  @Input() getCountry: Country[] = [];
  @Input() source: number = 0;

  @Output() backEvent = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {

  }

  isBack() {
    this.backEvent.emit(this.source)
  }

}
