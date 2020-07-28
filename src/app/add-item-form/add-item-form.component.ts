import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {
  @Input() item:BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  // cfe: new @Output: clearClick
  @Output() resetButton: EventEmitter<any> = new EventEmitter<any>();

  isNewItem: boolean;
  constructor() { }

  ngOnInit() {
    if (this.item){
      //if item already has an value > it is not a new item
      this.isNewItem = false;

    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null)
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

  onResetButtonClicked(){
    this.resetButton.emit();
    console.log("add item form event emitted")
  }

}
