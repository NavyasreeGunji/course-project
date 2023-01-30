import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.component";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    ingredientChanged = new Subject<Ingredient[]>()
    startEditing = new Subject<number>();
    editedItem: Ingredient;

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    updateIngredient(index: number, ingredients: Ingredient) {
        this.ingredients[index] = ingredients;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredient(ing: Ingredient) {
        this.ingredients.push(ing);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredientsToSL(ingredient: Ingredient[]) {
        this.ingredients.push(...ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}
