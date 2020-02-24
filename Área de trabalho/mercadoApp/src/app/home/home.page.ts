import { Component } from '@angular/core';
import {ToastController} from '@ionic/angular';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toast : ToastController, private banco : AngularFireDatabase, private router : Router) {}

  async mostrarAlerta(valor){
    let a = valor;
    this.banco.list("Teste").push(a);
    const alert = await this.toast.create({
      header : "Olá Mundo!",
      duration : 2000,
    });
    await alert.present();
  }
  soVamo(){
    this.router.navigate(["teste"]);
  }
}
