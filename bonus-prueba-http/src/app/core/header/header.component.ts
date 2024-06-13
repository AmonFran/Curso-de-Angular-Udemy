import { Component } from '@angular/core';
import { RecipeService } from '../../recipes/recipe.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService, public authService: AuthService) {

    }
    onSaveData() {

        this.dataStorageService.storeRecipes().subscribe(
            (response) => {
                console.log(response);
            }
        );

        // this.dataStorageService.storeRecipes().subscribe(
        //     (response: HttpEvent<Object>) => {
        //         //El primer objeto que devuelve es de este tipo
        //         console.log(response.type === HttpEventType.Sent);
        //         // El segundo objeto es
        //         console.log(response.type === HttpEventType.Response);

        //         console.log(response);
        //     }
        // );
    }
    onFetchData() {
        // Mi solucion
        // this.dataStorageService.getRecipes().subscribe(
        //     (response) => {
        //         (<Recipe[]> response)
        //         console.log(response);
        //         this.recipeService.loadRecipes(response);
        //     },
        //     (error) => {
        //         console.log(error);
        //     }
        // );

        // Solucion del curso
        this.dataStorageService.getRecipes();
    }

    onLogOut() {
        this.authService.logOut();
    }
}