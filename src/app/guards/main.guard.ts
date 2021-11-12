import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  constructor(private navCtrl: NavController) { }

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      if(localStorage.getItem('usuario')){
      
        return true;
      }else{
        this.navCtrl.navigateForward('/login');
        return false;
        
      }
  }
}
