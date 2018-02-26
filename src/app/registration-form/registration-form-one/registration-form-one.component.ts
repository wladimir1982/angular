import {Component} from "@angular/core";
import {Location} from "@angular/common";


@Component({
  selector: 'app-registration-form-one',
  templateUrl: './registration-form-one.component.html',
  styleUrls: ['./registration-form-one.component.css']
})

export class RegistrationFormOneComponent {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }


}
