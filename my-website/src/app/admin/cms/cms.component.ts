import { Component, OnInit } from '@angular/core';
import {Content} from "../../Content";
import {ApiService} from "../../api.service";
import {cmsVariable} from "../../../global"; //<==== this one


@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css']
})
export class CmsComponent implements OnInit {
  public contents = [];

  public selected_content = new Content();

  constructor(private api: ApiService) {
  }


  ngOnInit(): void {
    //cmsVariable = true;
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

  public showModalUpdateContent(content: Content) {
    this.selected_content = content;
    document.getElementById('editContentModal').className += ' is-active';
  }

}
