import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Country } from '../models/Country';

@Component({
  selector: 'app-all-country',
  templateUrl: './all-country.component.html',
  styleUrls: ['./all-country.component.css']
})
export class AllCountryComponent implements OnInit {

  @Input() Countries: Country[] = []
  @Output() getCountryEvent = new EventEmitter<number>()

  getCountry: Country[] = [];

  isHomeShown = true;
  isAllCountryShown = false;
  isDetailShown = false;

  id: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  getCountryId(id: number) {

    this.getCountryEvent.emit(id)

  }
}
