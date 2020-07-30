import { Component, OnInit,  Inject, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    // this.dialogRef.close(updatedItem);

    this.submitted.emit(updatedItem);
  }

}
