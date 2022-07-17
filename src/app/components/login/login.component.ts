import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginI } from '../../models/login.interface';
import { SpoonacularService } from '../../services/spoonacular.service';

/* */
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
/*import Swal from 'sweetalert2';
*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm = new FormGroup( {
  usuario: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required)
})
/*  constructor() { }*/


onLogin (form) {
 /* this.api.loginByEmail(form).subscribe(data=>console.log(data));
 */
  console.log(form)
}


/**/ 
@Input () usuario: LoginI;

recuerdame: boolean=true;
errorMessage: string = "";
token;

constructor(private router: Router,
           private authService:AuthService, 
           ) { }

ngOnInit(): void {

  if(this.recuerdame){ 
    this.usuario.email=localStorage.getItem('email')
    this.recuerdame=true;
  }
  //this.usuario.email="challenge@alkemy.org";
  //this.usuario.password="react";
}

    



  onSubmit( form:NgForm ) {
            
                  // Si la validacio no es correcta no hace nada
                if(form.invalid){ return; }
      
              /*  Swal.fire({
                  allowOutsideClick:false,
                  icon: 'info',
                  text:'Epere porfavor',
                });
      
                Swal.showLoading();
      */
                 // se consume el servicio
                this.authService.loginUser(this.usuario)
                  .subscribe(data=>{
                    /*Swal.close();*/
                    if(this.recuerdame){ 
                      localStorage.setItem('email',this.usuario.email)
                    } else{
                      localStorage.setItem('email','');

                    }



                    this.router.navigate(['/menu']);
        
                   }, 
                   (err)=> {
                     console.log("Error",err.error.error);
                    this.errorMessage = "Login Incorrecto!";
                  /*  Swal.fire({
                      title: "Error de autenticacion",
                      icon: 'error',
                      text:'Login Incorrecto!',
                    });*/
                   });
         


    
      } 





}

function usuario(usuario: any,arg1: string) {
throw new Error('Function not implemented.');
}
