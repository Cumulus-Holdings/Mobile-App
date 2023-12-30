import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Provider } from '../../provider/provider';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SignupService {
 
    public parameters: any;
    public params: any;
    public temp:any;

    public constructor(public http: HttpClient, public provider:Provider) {
        this.parameters = {};
        this.params = {};
    }

    public signup(firstName,lastName,age,email,password,mobile): Observable<any> {
        const headers = new HttpHeaders({
            "Content-Type": "application/json"
          });
        const link = this.provider.apiUrl.signup
        const bodyObject = {
            'firstName':firstName,
            'lastName':lastName,
            'age':Number(age),
            'email':email,
            'password':password,
            'mobile':mobile,
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