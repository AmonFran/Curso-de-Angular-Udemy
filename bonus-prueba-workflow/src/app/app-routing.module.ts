import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component'
const appRoutes: Routes[
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
component: HomeComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot[appRoutes]],
    exports: [RouterModule]
})
export class AppRoutingModule {

}