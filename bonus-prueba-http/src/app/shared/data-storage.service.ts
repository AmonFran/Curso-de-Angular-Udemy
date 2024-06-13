import { HttpClient, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }
    storeRecipes() {
        const token = this.authService.getToken();
        // const headers = new HttpHeaders().set('Authorization','Bearer afdklasflaldf')

        // return this.http.put('https://ng-recipe-book-e1afb-default-rtdb.europe-west1.firebasedatabase.app/recipes.json?auth=' + token, this.recipeService.getRecipes());

        //Se pueden pasar parametros mediante un objeto, como se ve en el siguiente codigo
        // return this.http.put('https://ng-recipe-book-e1afb-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', this.recipeService.getRecipes(), {
        //     observe: 'body',
        //     params: new HttpParams().set('auth', token),
        //     // headers: headers,
        // });

        const req = new HttpRequest('PUT', 'https://ng-recipe-book-e1afb-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', this.recipeService.getRecipes(), {
            reportProgress: true,
            // params: new HttpParams().set('auth', token),
        })
        return this.http.request(req);
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
        return this.http.get<Recipe[]>('https://ng-recipe-book-e1afb-default-rtdb.europe-west1.firebasedatabase.app/recipes.json?auth=' + token).subscribe(
            (response) => {
                const recipes = response;
                this.recipeService.loadRecipes(recipes);
            }
        );
        // return this.http.get<Recipe[]>('https://ng-recipe-book-e1afb-default-rtdb.europe-west1.firebasedatabase.app/recipes.json?auth=' + token, {
        //     observe: 'body',
        //     responseType: 'json',
        // }).subscribe(
        //     (response) => {
        //         console.log(response);
        //     }
        // );
    }
}