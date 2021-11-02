import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {

  endpoint: string = 'http://localhost:3000/studios'

  constructor(private http: HttpClient) { }



  ngOnInit(): void {
  }

}
