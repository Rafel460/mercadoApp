import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {AngularFireDatabaseModule, AngularFireDatabase} from  '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { fromEventPattern } from 'rxjs';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, AngularFireModule.initializeApp({

      apiKey: "AIzaSyDHSNPr0Zjw4CsF1UaG6WFs-1dHayX3V40",
      authDomain: "projetomercado-67fee.firebaseapp.com",
      databaseURL: "https://projetomercado-67fee.firebaseio.com",
      projectId: "projetomercado-67fee",
      storageBucket: "projetomercado-67fee.appspot.com",
      messagingSenderId: "705626057614",
      appId: "1:705626057614:web:34dca11a6f4fe9f88692df",
      measurementId: "G-9WVHWFK403"

  }), AngularFireDatabaseModule],
  providers: [
    StatusBar,
    AngularFireDatabase,
    AngularFireAuth,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
