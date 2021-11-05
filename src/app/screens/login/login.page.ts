import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup;
  constructor(private navController:NavController,private loginService:LoginService) { }

  ngOnInit() {
    this.loginForm=new FormGroup({
      dni:new  FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      

    })
  }
onSubmit(){
  this.loginForm.markAllAsTouched();
  if(this.loginForm.valid){
    let usuario=new Usuario();
    usuario.dni=this.loginForm.get('dni').value;
    usuario.clave=this.loginForm.get('password').value;
    this.loginService.login(usuario).subscribe(res=>{
     
      if(res.acceso){
        //guardar res en localstorage
        localStorage.setItem('usuario',JSON.stringify(res));
        this.navController.navigateRoot('/main/menu');
      }
    })
      
   
    }
    return
  }
}

