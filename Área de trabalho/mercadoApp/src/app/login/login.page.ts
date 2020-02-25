import { Component, OnInit } from '@angular/core';
import{AngularFireAuth} from 'angularfire2/auth';
import{Usuario} from '../classes/usuario/usuario';
import{ToastController, AlertController} from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario : Usuario = new Usuario();
  constructor(private autenticacao : AngularFireAuth, private toast : ToastController, private alerta : AlertController) { }

  ngOnInit() {
  }
  async loginErro(){
    const error = await this.toast.create({
      message : 'Email ou senha incorretos, por favor, tente novamente',
      buttons : ['Ok'],
      duration : 2000
    })
    await error.present();
  }
  login(email, senha){
    this.autenticacao.auth.signInWithEmailAndPassword(email, senha).then(
      () => {alert('Deu certo, só não criei a tela ainda kkk');}).catch((erro) => {this.loginErro()})
    
  }

}
