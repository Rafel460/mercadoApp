import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';
import {Usuario} from '../classes/usuario/usuario';
import {ToastController} from '@ionic/angular';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  usuario: Usuario = new Usuario();
  constructor(private autenticacao : AngularFireAuth, private banco: AngularFireDatabase, private router: Router, private toast: ToastController, private alerta : AlertController) { }

  ngOnInit() {
  }
  async authErro(){
    const vish = await this.alerta.create({
      header: "Ocorreu um erro",
      message: "Não foi possível concluir o seu cadastro, por favor, tente novamente e caso o erro persista, envie-nos um email",
      buttons: [{
        text: 'Enviar email',
        handler: () =>{
          this.router.navigate(['home']);
        }
      }, {text: 'Ok'}]
    })
    await vish.present();
  }
  async senhaErro(){
    const ruim = await this.toast.create({
      message : 'Senhas não conferem',
      buttons : ['OK'],
      duration: 2000
    })
    await ruim.present();
  }
  inscrever(nome, email, senha, senha_c){
    this.usuario.nome = nome;
    this.usuario.email = email;
    this.usuario.senha = senha;
    if(senha != senha_c){
      this.senhaErro();
    }else{
      this.banco.list('Usuario').push(this.usuario);
      this.autenticacao.auth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.senha).then(
        () => {this.router.navigate(['home']);}).catch((erro) => this.authErro() )
    }
  }
}
