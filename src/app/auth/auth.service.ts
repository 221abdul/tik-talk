import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { TokenResponse } from './auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  private baseUrl: string = 'https://icherniakov.ru/yt-course/auth/';

  login( payload: {username: string, password: string}){
    const fd = new FormData()
    fd.append('username', payload.username)
    fd.append('password',payload.password)
    return this.http.post<TokenResponse>(`${this.baseUrl}token`,
      fd,
    ).pipe(
      tap(val => {

      })
    )
  }
}
