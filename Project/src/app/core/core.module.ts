import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { AuthService } from "../auth/auth.service";
import { RecipeService } from "../recipes/recipe.service";
import { DataStorageService } from "../shared/data-storage.service";
import { SharedModule } from "../shared/shared.module";
import { ShoppingListService } from "../shopping-list/Shopping-list.service";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        HomeComponent
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService,
        AuthService,
    ],
})
export class CoreModule {

}