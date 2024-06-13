import { Actions, Effect, ofType } from "@ngrx/effects";

import { HttpClient, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { map, switchMap, withLatestFrom } from "rxjs";
import { Recipe } from "../recipe.model";
import * as RecipeActions from './recipe.actions';
import * as fromRecipe from './recipe.reducers';

@Injectable()
export class RecipeEffects {
    // recipeFetch = createEffect(
    //     () => {
    //         this.actions$
    //             .pipe(
    //                 ofType(
    //                     RecipeActions.FETCH_RECIPES
    //                 ),
    //                 switchMap(
    //                     (action: RecipeActions.FetchRecipes) => {
    //                         this.httpClient.get<Recipe[]>('https://ng-recipe-book-e1afb-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', {
    //                             observe: 'body',
    //                             responseType: 'json'
    //                         })
    //                     }
    //                 ),
    //                 map(
    //                     (recipes) => {
    //                         console.log(recipes);
    //                         for (let recipe of recipes) {
    //                             if (!recipe['ingredients']) {
    //                                 recipe['ingredients'] = [];
    //                             }
    //                         }
    //                         return {
    //                             type: RecipeActions.SET_RECIPES,
    //                             payload: recipes,
    //                         };
    //                     }
    //                 )
    //             )
    //     }
    // )
    @Effect()
    recipeFetch = this.actions$
        .pipe(
            ofType(
                RecipeActions.FETCH_RECIPES
            ),
            switchMap(
                (action: RecipeActions.FetchRecipes) => {
                    return this.httpClient.get<Recipe[]>('https://ng-recipe-book-e1afb-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', {
                        observe: 'body',
                        responseType: 'json'
                    })
                }
            ),
            map(
                (recipes) => {
                    console.log(recipes);
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return {
                        type: RecipeActions.SET_RECIPES,
                        payload: recipes,
                    };
                }
            )
        )
    @Effect({ dispatch: false })
    recipeStore = this.actions$
        .pipe(
            ofType(
                RecipeActions.STORE_RECIPES
            ),
            withLatestFrom(this.store.select('recipes')),
            switchMap(
                ([action, state]) => {
                    const req = new HttpRequest('PUT', 'https://ng-recipe-book-e1afb-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', state.recipes, { reportProgress: true });
                    return this.httpClient.request(req);
                }
            )
        )


    constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<fromRecipe.FeatureState>) { }


}