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


  get totalBudget() {
    return this.budgetItems
    .map((obj) => obj.amount)
    .reduce((acc, value) => acc + value, 0);
  }

  constructor() {}

  ngOnInit() {}

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget;
    console.log("total budget getter run")
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);

  }

  updateItem(updateEvent: UpdateEvent) {
    //result is the updated budgetitem
    //replace item with updated/submitted item from form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] =
      updateEvent.new;
    //updatetotal budget

  }

  onClearClick() {
    console.log('mainpage event emitted')
    // Clear budgetItems Array
    this.budgetItems = [];
    console.log(this.budgetItems)
  }
}
