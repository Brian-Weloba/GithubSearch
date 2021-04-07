import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { SearchService } from '../services/search.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  repos: Repo;
  users: User[];

  constructor(private search: SearchService) { }

  ngOnInit(): void {
    this.searchUsers('brian-weloba');
    this.searchRepos('brian-weloba');
  }

  searchUsers(searchTerm: string) {
    this.search.searchUser(searchTerm).then(
      () => {
        this.users = this.search.users;
      },
      (error) => {
        console.log(error)
      }
    )
  }

  searchRepos(searchTerm: string) {
    this.search.searchRepo(searchTerm).then(
      () => {
        this.repos = this.search.repos;
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
