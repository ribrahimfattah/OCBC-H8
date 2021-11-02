import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class HomeComponent implements OnInit {

  // =================== DECLARATION
  cek: any;
  employees: any;
  action: string = "";
  closeModal: string = "";

  id: number = 0
  title: string = ""
  firstName: string = ""
  lastName: string = ""
  role: string = ""
  email: string = ""
  password: string = ""
  confirmPassword: string = ""
  isSubmitted = false;

  constructor(private employee: EmployeeService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  // ================== VALIDATION
  formData = new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    firstName: new FormControl('', [
      Validators.required
    ]),
    lastName: new FormControl('', [
      Validators.required
    ]),
    role: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  },
    {
      validators: [CustomValidators.match('password', 'confirmPassword')]
    }
  )

  //  ========================= GETTER
  get gettitle() {
    return this.formData.get('title')
  }
  get getfirstName() {
    return this.formData.get('firstName')
  }
  get getlastName() {
    return this.formData.get('lastName')
  }
  get getrole() {
    return this.formData.get('role')
  }
  get getemail() {
    return this.formData.get('email')
  }
  get getpassword() {
    return this.formData.get('password')
  }
  get getconfirmPassword() {
    return this.formData.get('confirmPassword')
  }


  ngOnInit(): void {
    this.employee.getEmployee().subscribe(x => this.employees = x)
    console.log(this.title)
  }

  // ==================== METHOD
  open(content: any, action: string) {
    this.modalService.open(content, { centered: true });
    this.action = action;
  }

  actionToggle() {
    this.isSubmitted = true
    if (this.gettitle?.status == 'VALID' && this.getfirstName?.status == 'VALID' && this.getlastName?.status == 'VALID' && this.getrole?.status == 'VALID' && this.getemail?.status == 'VALID') {

      if (this.action == 'create' && this.getpassword?.status == 'VALID' && this.getconfirmPassword?.status == 'VALID')
        this.store()
      else if (this.action == 'create' || this.action == 'edit')
        this.store()
      else if (this.action == 'delete')
        this.deleteEmployee(this.id)
    } else {
      console.log(this.isSubmitted)
    }
  }

  store() {
    if (this.action == 'create') {
      console.log("wokeeee")
      this.employees = {
        title: this.title,
        firstName: this.firstName,
        lastName: this.lastName,
        role: this.role,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      }

      this.employee.postEmployee(this.employees).subscribe(x => location.reload())
    }
    else if (this.action == 'edit') {
      this.employees = {
        title: this.title,
        firstName: this.firstName,
        lastName: this.lastName,
        role: this.role
      }

      this.employee.putEmployee(this.employees, this.id).subscribe(x => location.reload())
    }


  }

  getEmployeeById(id: number) {
    console.log(this.title)
    let data: any
    this.employee.getEmployeebyId(id).subscribe(x => {
      data = x
      // this.employees = {
      this.id = data['id'],
        this.title = data['title'],
        this.firstName = data['firstName'],
        this.lastName = data['lastName'],
        this.role = data['role'],
        this.email = data['email']
      // }
    })
  }

  deleteEmployee(id: number) {
    this.employee.deleteEmployee(id).subscribe(x => location.reload())
  }

}
