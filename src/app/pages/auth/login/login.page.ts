import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../../services/login-service.service';
import { UserData } from '../../../models/userData';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loginSvc: LoginServiceService,
    public toastCtrl: ToastController,
    private router: Router) { }

  user:string;
  password:string;
  
  ngOnInit() {
  }

  login(){
    /*if(this.email !== this.emailRepeat){
      this.presentToast('El email no coincide');
      return;
    }*/
    let dataUser = new UserData(this.user, this.password,null);

    this.loginSvc.login(dataUser)
    .subscribe(resp=> {

      console.log(resp);

      if(!resp.find){
        this.presentToast('Usuario incorrecto.');
        return;
      }

      this.presentToast('Login correcto.');
      this.router.navigate(['menu']);
      
    });
  }

  goToRegister(){
    this.router.navigate(['register']);
  }

  remember(){
    this.presentToast('No funciono.');
  }

  async presentToast(message:string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });
    toast.present();
  }


}
