import { Component, OnInit, Input} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AngularFireAuth} from 'angularfire2/auth';
@Component({
  selector: 'app-erro-email',
  templateUrl: './erro-email.component.html',
  styleUrls: ['./erro-email.component.scss'],
})
export class ErroEmailComponent implements OnInit {
  @Input() email : string;
  constructor(private modal : ModalController, private autenticacao : AngularFireAuth) { }

  ngOnInit() {}

  enviarEmail(email){
    this.autenticacao.auth.sendPasswordResetEmail(email).then( () => {this.fechar()}).catch((erro)=>{console.log('Ocorreu um erro')} )
  }

  fechar(){
    this.modal.dismiss();
  }
}
