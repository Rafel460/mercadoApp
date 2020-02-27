import { Component, OnInit, Input} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {NavController, NavParams} from '@ionic/angular';
@Component({
  selector: 'app-erro-email',
  templateUrl: './erro-email.component.html',
  styleUrls: ['./erro-email.component.scss'],
})
export class ErroEmailComponent implements OnInit {
  @Input() email : string;
  constructor(private navp : NavParams, private modal : ModalController, private nav : NavController) { }

  ngOnInit() {}
  fechar(){
    this.modal.dismiss();
  }
}
