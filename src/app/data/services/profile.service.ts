import { Injectable ,inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../../interfaces/profile.interface';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl: string = 'https://icherniakov.ru/yt-course';
  http = inject(HttpClient)
  constructor() {}

  getTestAccounts()  {
    return this.http.get<Profile[]>(`${this.baseUrl}/account/test_accounts`);
  }
}
