import {Component} from "@angular/core";
import {Location} from "@angular/common";


@Component({
  selector: 'app-registration-form-two',
  templateUrl: './registration-form-two.component.html',
  styleUrls: ['./registration-form-two.component.css']
})

export class RegistrationFormTwoComponent {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }



}
