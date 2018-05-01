import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../Content";
import {ApiService} from "../api.service";
import {Mail} from "../Mail";
import {Message} from "../Message";
import {Router} from "@angular/router";

@Component({
  selector: 'app-web-page',
  templateUrl: './web-page.component.html',
  styleUrls: ['./web-page.component.css']
})
export class WebPageComponent implements OnInit {

  public contents = [];


  mail = new Mail();

  constructor(private api: ApiService, private _router: Router) {
  }

  ngOnInit(): void {
    this.api.getAllContents()
      .subscribe(
        data => {
          this.contents = data;
        },
        error => console.log(error)
      );
  }

  public getContent(content_id: string): Content {
    for (const content of this.contents) {
      if (content.content_id === content_id) {
        return content;
      }
    }
  }

  public sendMail(mail: string, onderwerp: string, bericht: string) {
    this.mail.mail = mail;
    this.mail.onderwerp = onderwerp;
    this.mail.bericht = bericht;
    this.api.mail(this.mail)
      .subscribe();
  }
}
