import { Component, OnInit, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';


@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss']
})
export class EditItemModelComponent implements OnInit {

  public item: BudgetItem;
  public submitted: EventEmitter<BudgetItem> = new EventEmitter();
  

  constructor() {}
  

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: BudgetItem) {


    this.submitted.emit(updatedItem);

  }

}
