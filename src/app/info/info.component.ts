import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'inf-app',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})


export class InfoComponent {

  id: number;
  // title: string;
  // description: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    // this.title = this.route.snapshot.params['title'];
    // this.description = this.route.snapshot.params['description'];

    this.route.params.subscribe((params:Params) => {
      this.id = +params['id'];
      // this.title = params['title'];
      // this.description = params['description'];
    });
  }

}































