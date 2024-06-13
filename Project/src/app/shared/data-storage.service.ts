import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }
    storeRecipes() {
        const token = this.authService.getToken();

        return this.http.put('https://ng-recipe-book-e1afb-default-rtdb.europe-west1.firebasedatabase.app/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }
    // Mi solucion
    // getRecipes() {
    //     return this.http.get('https://ng-recipe-book-e1afb-default-rtdb.europe-west1.firebasedatabase.app/recipes.json').pipe(
    //         map(
    //             (response: any) => {
    //                 const data = response;
    //                 return data;
    //             }
    //         )
    //     );
    // }

    // Solucion del curso
    getRecipes() {
        const token = this.authService.getToken();
        return this.http.get('https://ng-recipe-book-e1afb-default-rtdb.europe-west1.firebasedatabase.app/recipes.json?auth=' + token).subscribe(
            (response: any) => {
                const recipes: Recipe[] = response;
                this.recipeService.loadRecipes(recipes);
            }
        );
    }
}