import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {
  counter: number = 0;
  // @Input() counter: number = 0;
  // @Output() counterChangeNumber = new EventEmitter<number>();
  constructor(private store:Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('numberCounter').subscribe( numberCounter =>{
      this.counter = numberCounter;
    });
  }

  reset(){
    this.store.dispatch(actions.reset());
    // this.counter = 0;
    // this.counterChangeNumber.emit(this.counter);
  }

}
