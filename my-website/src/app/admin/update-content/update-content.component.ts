import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../../Content';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-update-content',
  templateUrl: './update-content.component.html',
  styleUrls: ['./update-content.component.css']
})
export class UpdateContentComponent implements OnInit {

  @Input()
  content: Content;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
  }

  public updateContent() {
    this.api.updateContent(this.content)
      .subscribe(
        data => {
          console.log(data);
          this.closeModal();
        },
        error => console.log(error)
      );
  }

  closeModal() {
    document.getElementById('editContentModal').classList.remove('is-active');
  }

}
