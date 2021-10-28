import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup;
  constructor(private navController:NavController) { }

  ngOnInit() {
    this.loginForm=new FormGroup({
      dni:new  FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      

    })
  }
onSubmit(){
  if(this.loginForm.valid){
    this.loginForm.markAllAsTouched();
    if(this.loginForm.get('dni').value=="12345678"
    &&this.loginForm.get('password').value=="123"){
      console.log("Login exitoso");
    this.navController.navigateRoot('main');
    }
    return
  }
}
}
