import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User, LoginResponse,CreateResponse } from '../../interfaces/dataUsers';
import { UserData } from '../models/userData';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  private ejecutarGet<T>(query : string){

    query = URL + query;
    query += ``;
    return this.http.get<T>( query );
  }

  private ejecutarPost<T>(query : string, body:any){

    query = URL + query;
    return this.http.post<T>( query, body);
  }

  login(user:UserData){
    
    return this.ejecutarPost<LoginResponse>('find', user)

  }

  createUser(user:UserData){

    return this.ejecutarPost<CreateResponse>('create', user)

  }




}
