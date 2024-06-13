import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyC2OQzDZ35KxAuEM_StIx3CzWK_3V2JP2E",
      authDomain: "ng-recipe-book-e1afb.firebaseapp.com", 
    })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
