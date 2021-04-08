import { SearchService } from './../services/search.service';
import { Component, OnInit } from '@angular/core';
import { Repos } from '../repos';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repository: Repos;

  constructor(public search:SearchService) { }

  ngOnInit(): void {
    this.searchRepository('akan');
  }

  searchRepository(searchTerm: string) {
    this.search.searchReposOnly(searchTerm);
    this.repository = this.search.repoN;;
    console.log(searchTerm)
  }

  

}
