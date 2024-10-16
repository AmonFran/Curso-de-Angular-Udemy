import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { AuthService } from "../auth/auth.service";
import { RecipeService } from "../recipes/recipe.service";
import { AuthInterceptor } from "../shared/auth.interceptor";
import { DataStorageService } from "../shared/data-storage.service";
import { SharedModule } from "../shared/shared.module";
import { ShoppingListService } from "../shopping-list/Shopping-list.service";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { LoggingInterceptor } from "../shared/logging.interceptor";
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
        // AuthInterceptor,
        // Los interceptores se ejecutan en el orden en el que se les llama aqui
        {
            //Asi se ponen los interceptores
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        {
            //Asi se ponen los interceptores
            provide: HTTP_INTERCEPTORS,
            useClass: LoggingInterceptor,
            multi: true
        },
    ],
})
export class CoreModule {

}