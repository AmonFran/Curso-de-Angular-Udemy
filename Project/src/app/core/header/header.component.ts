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
            (response: any) => {
                console.log(response);
            }
        );
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