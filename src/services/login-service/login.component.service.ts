import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Provider } from '../../provider/provider';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
    public parameters: any;
    public params: any;
    public temp:any;
    public _url: any = "../assets/airports.json";
    public getJSON() {
        return this.http
          .get(this._url)
          .pipe(map((res: any) => res))
      }

    public constructor(public http: HttpClient, public provider:Provider) {
        this.parameters = {};
        this.params = {};
        this.getJSON().subscribe(data => {
            this.provider.rawData = data;
          });
    }

    public login(email,password): Observable<any> {
        const headers = new HttpHeaders({
            "Content-Type": "application/json"
          });
        const link = this.provider.apiUrl.login
        const bodyObject = {
            email:email,
            password:password
        }
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
        .post(link, bodyObject, {headers}) // ...using post request
        .pipe(
          map((res: any) => res),
          catchError((error: any) => {
            console.log(error);
            return Observable.throw(error.json().error || "Server error");
          })
        );
    }
}