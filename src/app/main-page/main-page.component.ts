import { Component, OnInit } from "@angular/core";
import { BudgetItem } from "src/shared/models/budget-item.model";
import { UpdateEvent } from "../budget-item-list/budget-item-list.component";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"],
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;
  constructor() {}

  ngOnInit() {}

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
    console.log(this.budgetItems);
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

  updateItem(updateEvent: UpdateEvent) {
    //result is the updated budgetitem
    //replace item with updated/submitted item from form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] =
      updateEvent.new;
    //updatetotal budget

    // cfe: create a get-er for totalBudget, 
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }

  onClearClick(){

    // Clear budgetItems Array
    // Clear budget-items container 
    // Update total budget display
  }
}
