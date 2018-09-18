import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/user.model';
import { RestResponse } from '../model/restResponse.model';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http: HttpClient) { }

  public validarUser(user: UserModel): boolean {
    let isvalid = true;
    if (!user.firstName) {
      isvalid = false;
    }
    if (!user.firstSurname) {
      isvalid = false;
    }
    if (!user.address) {
      isvalid = false;
    }
    return isvalid;
  }
  public saveOrUpdate(user: UserModel): Observable<RestResponse> {
    return this.http.post<RestResponse>('http://localhost:8080/saveOrUpdate', JSON.stringify(user));
  }
}
