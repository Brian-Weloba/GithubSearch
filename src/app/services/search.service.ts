import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repo } from '../repo';
import { User } from '../user';
import { Repos } from '../repos';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  users: User[];
  repos: Repo;
  repoN: Repos;
  repository: Repos[];
  arrayData: any;


  constructor(private http: HttpClient) {
    this.repoN = new Repos('', '', '', 0, 0, '', new Date());
  }

  searchUser(username: string) {
    let promise = new Promise<void>((resolve, reject) => {

      this.http.get<any>('https://api.github.com/users/' + username).toPromise().then(
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

  searchRepo(username: string) {
    interface results {
      login: string;
      username: string;
      avatar_url: string;
      html_url: string;
      name: string;
      url: string;
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<results>('https://api.github.com/users/' + username + '/repos').toPromise().then(
        (results) => {
          this.repos;
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

  // searchReposOnly(repoName) {
  //   const promise = new Promise((resolve, reject) => {
  //     this.http.get<any>('https://api.github.com/search/repositories?q=' + repoName +'?access_token=' + environment.apiKey).toPromise().then(
  //       (result) => {
  //         this.repository = [];
  //         this.repository.push(result)
  //         resolve(0);

  //       },
  //       (error) => {
  //         console.log(error);
  //         reject();
  //       });
  //   });
  //   console.log(promise);
  //   return promise;
  // }

  searchReposOnly(repoName) {
    // tslint:disable-next-line:class-name
    interface repobyName {
      name: string;
      html_url: string;
      description: string;
      forks: number;
      watchers_count: number;
      language: string;
      created_at: Date;
    }
    const promise = new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.http.get<repobyName>('https://api.github.com/search/repositories?q=' + repoName).toPromise().then(
        (result) => {
          this.repoN.name = result.name;
          this.repoN.html_url = result.html_url;
          this.repoN.description = result.description;
          this.repoN.forks = result.forks;
          this.repoN.watchers_count = result.watchers_count;
          this.repoN.created_at = result.created_at;
          this.repoN.language = result.language;
          resolve(0);

          this.arrayData = Object.entries(result);
          const repositoryData = this.arrayData[2];
          const convertRepositoryData = repositoryData[Object.keys(repositoryData)[1]];
          this.repository = convertRepositoryData;

        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    console.log(promise);
    return promise;
  }
}
