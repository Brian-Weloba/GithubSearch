import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repo } from '../repo';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  users: User[];
  repos: Repo[];


  constructor(private http: HttpClient) { }

  searchUser(username: string) {
    let promise = new Promise<void>((resolve, reject) => {

      this.http.get<any>('https://api.github.com/users/' + username + '?access_token=' + atob(environment.apiKey)).toPromise().then(
        (results) => {
          this.users = [];
          this.users.push(results);

          resolve()
        },
        (error) => {
          console.log(error);
          reject();
        }
      )
    })
    return promise;
  }

  searchRepo(username) {
    interface results {
      login: string;
      username: string;
      avatar_url: string;
      html_url: string;
      name: string;
      url: string;
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<any>('https://api.github.com/users/' + username + '?access_token=' + atob(environment.apiKey)).toPromise().then(
        (results) => {
          this.repos = results;

          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      )
    })

    return promise;

  }
}
