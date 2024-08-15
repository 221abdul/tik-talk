import { Component, inject } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  authService = inject(AuthService)

  profileForm = new FormGroup(
    {
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
    onSubmit(){
      if(this.profileForm.valid){
        //@ts-ignore
        this.authService.login(this.profileForm.value)
      }
    }
}
