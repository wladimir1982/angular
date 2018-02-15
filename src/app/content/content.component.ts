import {Component, OnInit} from "@angular/core";
import {ContentService} from "./content.service";
import {Router} from "@angular/router";

@Component({
  selector: 'cont-app',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ContentService]
})

export class ContentComponent implements OnInit {
  public articles: any;

  constructor(private contentService: ContentService, private router: Router) {
  }

  ngOnInit() {
    // this.articles = this.contentService.articles;
    this.contentService.getArticles().subscribe(articles => {
      this.articles = articles;
      console.log(articles);
    });
  }

}





































