import { Component, OnInit } from '@angular/core';
import{AngularFireAuth} from 'angularfire2/auth';
import{Usuario} from '../classes/usuario/usuario';
import{ToastController, AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario : Usuario = new Usuario();
  constructor(private autenticacao : AngularFireAuth, private toast : ToastController, private alerta : AlertController, private router: Router) { }
  cont : number = 0;
  ngOnInit() {
  }
  async pedidoRedefinicao(email){
    const alerte = await this.alerta.create({
      header : 'Oops',
      message: 'Parece que você errou sua senha várias vezes, deseja mandar um pedido de redefinição de senha no seu e-mail?',
      buttons: [{text : 'Não'},{
        text : 'Sim',
        handler : ()=>{
          this.autenticacao.auth.sendPasswordResetEmail(email).catch((erro) => {console.log('Deu ruim')})
        }
      }]
    })
    await alerte.present();
  }
  async loginErro(email){
    this.cont = this.cont+1;
    console.log(this.cont);
    if(this.cont == 3){
      this.pedidoRedefinicao(email)
    }
    const error = await this.toast.create({
      message : 'Email ou senha incorretos, por favor, tente novamente',
      buttons : ['Ok'],
      duration : 2000
    })
    await error.present();
  }
  login(email, senha){
    this.autenticacao.auth.signInWithEmailAndPassword(email, senha).then(
      () => {alert('Deu certo, só não criei a tela ainda kkk');}).catch((erro) => {this.loginErro(email)})
    
  }

}
