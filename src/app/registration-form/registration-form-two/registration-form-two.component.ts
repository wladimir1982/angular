import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {RegistrationFormService} from "../registration-form.service";


@Component({
  selector: 'app-registration-form-two',
  templateUrl: './registration-form-two.component.html',
  styleUrls: ['./registration-form-two.component.css']
})

export class RegistrationFormTwoComponent {


  constructor(private location: Location, private registrationFormService: RegistrationFormService) {}

  login: string = this.registrationFormService.obj.login;
  password: string = this.registrationFormService.obj.password;
  confirm: string = this.registrationFormService.obj.confirm;
  firstName: string = this.registrationFormService.obj.firstName;
  lastName: string = this.registrationFormService.obj.lastName;
  desc: string = this.registrationFormService.obj.desc;


  goBack(): void {
    this.location.back();
  }



}
