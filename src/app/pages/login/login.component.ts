import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj:any = {
    "EmailId": "string",
    "Password": "string"
  }

  http = inject(HttpClient);
  router = inject(Router)
  onLogin(){
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",this.loginObj).subscribe((res:any) => {
      if(res.result){
        alert("Login Success")
        localStorage.setItem('angular18Tpken',res.data.token);
        this.router.navigateByUrl('dashboard')
      }
      else{
        alert(res.message)
      }
    })
  }

}
