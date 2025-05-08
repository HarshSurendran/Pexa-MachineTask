import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api/users';
  private apiKey = 'reqres-free-v1';

  getUsers(page: number, perPage: number) {
    const params = new HttpParams()
    .set('page', page)
    .set('per_page', perPage);
    const headers = new HttpHeaders({
      'x-api-key': `${this.apiKey}`,
    });
    return this.http.get<any>(this.baseUrl, { params, headers })
  }
}
