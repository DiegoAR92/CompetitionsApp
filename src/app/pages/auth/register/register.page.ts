import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginServiceService } from '../../../services/login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private loginSvc: LoginServiceService,
    public toastCtrl: ToastController,
    private router: Router) { }
  ngOnInit() {
  }

  user:string;
  password:string;
  passwordRepeat:string;
  email:string;
  emailRepeat:string;

  register(){
    if(!this.user || !this.password || !this.passwordRepeat || !this.email || !this.emailRepeat){
      this.presentToast('Datos incompletos');
      return;
    }

    this.presentToast('Usuario creado correctamente.')
    this.router.navigate(['']);


  }

  goBack(){
  }


  async presentToast(message:string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });
    toast.present();
  }

}
