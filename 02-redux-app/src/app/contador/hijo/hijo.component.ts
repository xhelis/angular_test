import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {
  counter: number = 0;
  numberProduct: string = "";
  numberDivided: string = "";
  // @Input() counter: number = 0;
  // @Output() changeCounterNumber = new EventEmitter<number>();

  constructor(private store:Store<AppState>) {}

  ngOnInit(): void {
    this.store.select("numberCounter")
    .subscribe((counter) =>{
      this.counter = counter;
    });
  }

  multiply(){
    console.log("numberProduct", this.numberProduct);
    this.store.dispatch(actions.multiply({num: Number(this.numberProduct)}));
    //this.counter *= 2;
    // this.changeCounterNumber.emit(this.counter);
  }

  divide(): void{
    console.log("numberDivided", this.numberDivided);
    this.store.dispatch(actions.divide({num: Number(this.numberDivided)}));
    // this.counter /= 2;
    // this.changeCounterNumber.emit(this.counter);
  }
  //resetNieto(number:number){
    //this.counter = number;
    // this.changeCounterNumber.emit(number);
  //}
}
