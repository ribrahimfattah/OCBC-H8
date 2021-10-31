import { Component, OnInit } from '@angular/core';
import { Country } from '../models/Country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries: Country[] = [];
  sortArea: Country[] = [];
  sortPopulation: Country[] = [];
  getCountry: Country[] = [];

  isHomeShown = true;
  isAllCountryShown = false;
  isDetailShown = false;

  source: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.countries = [
      {
        id: 1,
        name: 'United States',
        capital: 'Washington,D.C',
        area: 9525067,
        population: 325365189,
        gdp: 18569100,
        currency: 'United States Dollar'
      },
      {
        id: 2,
        name: 'China',
        capital: 'Beijing',
        area: 9596961,
        population: 1403500365,
        gdp: 18569100,
        currency: 'United States Dollar'
      },
      {
        id: 3,
        name: 'japan',
        capital: 'Tokyo',
        area: 9525067,
        population: 325365189,
        gdp: 18569100,
        currency: 'United States Dollar'
      },
      {
        id: 4,
        name: 'Rusia',
        capital: 'Moscow',
        area: 17098246,
        population: 144463451,
        gdp: 18569100,
        currency: 'United States Dollar'
      },
      {
        id: 5,
        name: 'Canada',
        capital: 'Octawa',
        area: 9984670,
        population: 325365189,
        gdp: 18569100,
        currency: 'United States Dollar'
      },
    ]

    this.sortPopulation = this.countries.map(x => Object.assign({}, x));
    this.sortArea = this.countries.map(x => Object.assign({}, x));


    this.sortPopulation.sort(function (a, b) {
      return b.population - a.population
    });

    this.sortArea.sort(function (a, b) {
      return b.area - a.area
    });
  }

  isHome() {
    this.isHomeShown = true;
    this.isAllCountryShown = false;
    this.isDetailShown = false;
  }

  isAllCountry() {
    this.isHomeShown = false;
    this.isAllCountryShown = true;
    this.isDetailShown = false;
  }

  isBack(id: number) {
    if (id == 0) {
      this.isHomeShown = true;
      this.isAllCountryShown = false;
      this.isDetailShown = false;
    }
    if (id == 1) {
      this.isHomeShown = false;
      this.isAllCountryShown = true;
      this.isDetailShown = false;
    }
  }

  getCountryId(id: number, source: number) {

    this.isHomeShown = false;
    this.isAllCountryShown = false;
    this.isDetailShown = true;
    this.source = source;

    this.countries.map((v) => {
      if (v.id == id) {
        this.getCountry = [
          {
            "id": v.id,
            "name": v.name,
            "capital": v.capital,
            "area": v.area,
            "population": v.population,
            "gdp": v.gdp,
            "currency": v.currency
          }
        ]
      };
    })

  }

}
