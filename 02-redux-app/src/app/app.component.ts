import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as actions from './contador/counter.actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter: number = 0;

  constructor(private store:Store<AppState>){
    // this.counter = 10;
    this.store.select('numberCounter').subscribe( numberCounter =>{
      this.counter = numberCounter;
    });
  }

  increase(){
    this.store.dispatch(actions.increase());
    //this.counter ++;
  }

  decrease(){
    this.store.dispatch(actions.decrease());
    //this.counter --;
  }
  // assignTo(number:number){
  //   this.counter = number;
  // }
}
