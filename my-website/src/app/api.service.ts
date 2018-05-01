import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Content} from './Content';
import {Message} from './Message';
import {Login} from './Login';
import {Mail} from "./Mail";

@Injectable()
export class ApiService {

  constructor(private client: HttpClient) {
  }

  public getAllContents(): Observable<Content[]> {
    return this.client.get<Content[]>('http://dtsl.ehb.be/~pieter.samoy/angular/api/api.php');
  }

  public updateContent(content: Content) {
    console.log(content);
    return this.client.put('http://localhost/gerben/api.php', content, {headers: {'Content-Type': 'application/json'}});
  }

  public login(login: Login): Observable<Message> {
    console.log(login.password);
    return this.client.post<Message>('http://localhost/gerben/login.php', login, {headers: {'Content-Type': 'application/json'}});
  }

  public mail(mail: Mail){
    console.log(mail.bericht);
    return this.client.post<Message>('http://10.9.208.44/gerben/mail.php', mail, {headers: {'Content-Type': 'application/json'}})
  }
}
