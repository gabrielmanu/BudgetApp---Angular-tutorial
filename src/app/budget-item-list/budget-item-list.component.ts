import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModelComponent } from '../edit-item-model/edit-item-model.component';

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem
}

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})


export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
 @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
 @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  get budgetItemsIncome() {

    return this.budgetItems.filter(item => item.amount >=0)
  }
  get budgetItemsExpenses() {

    return this.budgetItems.filter(item => item.amount <0)
  }

 


  // cfe: nice use of MatDialog, now delete it and use dynamic components:
  // https://angular.io/guide/dynamic-component-loader
  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);

  }

  onCardClicked(item: BudgetItem){
    // show edit model
    const dialogRef = this.dialog.open(EditItemModelComponent, {
      width:'580px',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.update.emit({
          old: item,
          new: result
        });
      }
    })
  }

}
