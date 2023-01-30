import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.component';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void { 
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients
    })
  }

  onEdit(index: number) {
    this.shoppingListService.startEditing.next(index);
  }

  // onIngAdded(ing: Ingredient) {
  //   this.ingredients.push(ing);
  // }
}
