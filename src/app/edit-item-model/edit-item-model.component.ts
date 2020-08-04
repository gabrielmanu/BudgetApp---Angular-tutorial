import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';


@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss']
})
export class EditItemModelComponent implements OnInit {

  public item: BudgetItem;
  public submitted: EventEmitter<BudgetItem> = new EventEmitter();
  @Output() overlayClick: EventEmitter<any> = new EventEmitter<any>();
  

  constructor() {}
  

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: BudgetItem) {
    this.submitted.emit(updatedItem);

  }

  onOverlayClicked(){
    this.overlayClick.emit();
    console.log('overlay was clicked')
  }

}
