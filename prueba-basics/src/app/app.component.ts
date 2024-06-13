import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrar = false;
  logins = [];
  mostrarOcultar() {
    this.mostrar = !this.mostrar;
    this.logins.push(new Date());
  }

}
