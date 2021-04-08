import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-repo-form',
  templateUrl: './repo-form.component.html',
  styleUrls: ['./repo-form.component.css']
})
export class RepoFormComponent implements OnInit {

  @Output() emitRepo:EventEmitter<string> = new EventEmitter<any>();

  repoName:string;

  searchFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor() { }

  searchR(event){
    if (event.keyCode === 13) {
      this.emitRepo.emit(this.repoName)
      console.log(this.repoName)
      this.searchFormControl.reset();
      console.log(this.repoName)
    }
  }

  ngOnInit(): void {
  }

}
