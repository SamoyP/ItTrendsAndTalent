import {Component, OnInit} from '@angular/core';
import * as cmsVariable from '../global'; //<==== this one

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  public loggedIn = localStorage.getItem('loggedIn');

  ngOnInit(): void {
  }


  public logout() {
    localStorage.setItem('loggedIn', '0');
  }

  public inCms() {
    return cmsVariable;
  }
}
