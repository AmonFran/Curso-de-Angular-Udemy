import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AlertComponent } from './alert.component';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content: any = null;

  constructor(injector: Injector, domSanitazer: DomSanitizer) {
    const AlertElement = createCustomElement(AlertComponent, { injector: injector })
    customElements.define('my-alert', AlertElement);
    setTimeout(() => {
      this.content = domSanitazer.bypassSecurityTrustHtml("<my-alert message='Rendered dynamically'></my-alert>");
    }, 1000);
  }
}
