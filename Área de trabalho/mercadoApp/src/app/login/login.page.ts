import { Component, OnInit } from '@angular/core';
import{AngularFireAuth} from 'angularfire2/auth';
import{Usuario} from '../classes/usuario/usuario';
import{ToastController, AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {NavController, NavParams} from '@ionic/angular';
import { ErroEmailComponent } from '../componentes/erro-email/erro-email.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario : Usuario = new Usuario();
  constructor(private autenticacao : AngularFireAuth, private toast : ToastController,
   private alerta : AlertController, private router: Router, private modal : ModalController) { }
  cont : number = 0;
  ngOnInit() {
  }
  async logError(email){
    const deu_r = await this.modal.create({
      component : ErroEmailComponent,
      componentProps : {'email' : email}
    })
    await deu_r.present();
  }
  async loginErro(email){
    this.cont = this.cont+1;
    console.log(this.cont);
    if(this.cont == 3){
      this.logError(email)
    }
    const error = await this.toast.create({
      message : 'Email ou senha incorretos, por favor, tente novamente',
      buttons : ['Ok'],
      position : "top",
      duration : 2000
    })
    await error.present();
  }
  login(email, senha){
    this.autenticacao.auth.signInWithEmailAndPassword(email, senha).then(
      () => {alert('Deu certo, só não criei a tela ainda kkk');}).catch((erro) => {this.loginErro(email)})
    
  }

}
