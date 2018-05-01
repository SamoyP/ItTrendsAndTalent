import {Component, OnInit} from '@angular/core';
import {Login} from '../../Login';
import {ApiService} from '../../api.service';
import {Message} from "../../Message";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login = new Login();

  constructor(private _apiService: ApiService, private _router: Router) {
  }

  ngOnInit() {
    localStorage.setItem('loggedIn', '1');
  }

  public onLogin() {
    // Als de message de code 200 terug geeft zijn de credentials juist en bij 201 zijn ze fout.
    this._apiService.login(this.login)
      .subscribe(
        data => {
          this.checkMessage(data);
        },
        error => console.log(error),
      );

  }

  private checkMessage(message: Message) {
    if(message.code === 200){
      localStorage.setItem('loggedIn', '1');
      this._router.navigate(['/cms']);
    } else {
      // Wanneer credentials fout zijn
    }
  }

}
