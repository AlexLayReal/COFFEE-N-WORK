import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { coffeeUser } from "./CoffeeUser";

@Injectable({
    providedIn: 'root'
})

export class dataService {
    
    _url = 'https://coffee-n-work-b43b6-default-rtdb.firebaseio.com/datos.json';

    constructor(private _http: HttpClient) { }

    enroll(usuario: coffeeUser){
       return this._http.post<any>(this._url, usuario);
    }
}