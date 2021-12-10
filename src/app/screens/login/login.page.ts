import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup;
  constructor(private navController:NavController,private loginService:LoginService,private alertController:AlertController) { }

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
    usuario.password=this.loginForm.get('password').value;
    this.loginService.login(usuario).subscribe(async res=>{
      

      localStorage.setItem('usuario',JSON.stringify(res));
      let roles=res.authorities;
      let buttons=[]
      for(let i=0;i<roles.length;i++){
      
        let text='';
        switch(roles[i].authority){
          case 'ROLE_ADMIN':
            text='Administrador'
            break;
            case 'ROLE_USER':
              text='Apoderado'
              break;
              case 'ROLE_MEDICO':
                text='Medico'
        }
        buttons.push({
          text:text,
          handler:()=>{
            console.log('confirm '+roles[i].authority)
            localStorage.setItem('rol',roles[i].authority);
            this.navController.navigateForward('/main/menu');
          }
        })

      }
      const alert = await this.alertController.create({
       
      
        header: 'Bienvenido',
        message: 'Con que rol quiere logearse',
        buttons: buttons
      });
  
      await alert.present().then(
        
      );


    },(err)=>{
      if(err.error.mensaje){
        
        alert(err.error.mensaje);

      }else{
        alert("Error al logearse");
      }
    })
      
   
    }
    return
  }
  ionViewWillEnter(){

this.loginForm.reset();
  }
}

