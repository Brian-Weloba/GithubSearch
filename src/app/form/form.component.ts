import { EventEmitter, Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() emitSearch:EventEmitter<string> = new EventEmitter<any>()

  username: string;

  constructor() { }

  search() {
    this.emitSearch.emit(this.username)
    console.log(this.username)
    }

  ngOnInit() {
  }

}
