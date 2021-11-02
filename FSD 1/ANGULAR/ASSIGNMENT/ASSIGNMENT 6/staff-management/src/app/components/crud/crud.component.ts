import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  @Input() title: string = ""
  @Input() firstName: string = ""
  @Input() lastName: string = ""
  @Input() role: string = ""
  @Input() email: string = ""
  @Input() password: string = ""
  @Input() confirmPassword: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
