import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'mensaje ',
      message: 'Buenas noches por cierto',
      buttons: ['COMO ASI'],
    });

    await alert.present();
  }
  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'mensaje 323423423423423',
      message: 'Buenas noches por cierto',
      buttons: ['COMO ASI'],
    });

    await alert.present();
  }
}









































