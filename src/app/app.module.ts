import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FIREBASE_APP_NAME, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent, 
    PruebaComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserModule, 
    AppRoutingModule, 
    FormsModule
    ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
