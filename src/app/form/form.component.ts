import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() emitSearch:EventEmitter<string> = new EventEmitter<any>()

  username: string;

  searchFormControl=new FormControl('', [
    Validators.required
  ]);

  constructor() { }

  search(event) {
  
    if(event.keyCode===13){
      this.emitSearch.emit(this.username)
      this.searchFormControl.reset();
    }
  
    }

  ngOnInit() {
  }

}
