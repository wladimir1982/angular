import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {RegistrationFormService} from "../registration-form.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-registration-form-one',
  templateUrl: './registration-form-one.component.html',
  styleUrls: ['./registration-form-one.component.css']
})

export class RegistrationFormOneComponent implements OnInit {

  form: FormGroup;

  constructor(private location: Location, private registrationFormService: RegistrationFormService, private router: Router) {}

  firstName: string = this.registrationFormService.obj.firstName;
  lastName: string = this.registrationFormService.obj.lastName;
  desc: string = this.registrationFormService.obj.desc;

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      desc: new FormControl('')
    });
  }


  goNext() {
    this.router.navigate(['/two']);
    this.registrationFormService.obj.firstName = this.firstName;
    this.registrationFormService.obj.lastName = this.lastName;
    this.registrationFormService.obj.desc = this.desc;
  }

  goBack(): void {
    this.location.back();
  }


}
// export const countries = [{
//   id: 1,
//   name: 'Country'
// }];
//
// export const cyties = [
//   {
//     id: 1,
//     name: 'City',
//     country: '1'
//   }
// ];
