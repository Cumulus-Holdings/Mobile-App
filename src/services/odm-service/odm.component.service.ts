
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Provider } from '../../provider/provider';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class OdmService {
    public constructor(public http: HttpClient, public provider:Provider) {
    }

    public getODM(srcAirport,dstAirport,customerTier,milesBalance): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.provider.token
        });
        const link = this.provider.apiUrl.odm
        const bodyObject = {
                srcAirport,
                dstAirport,
                customerTier,
                milesBalance,
                offers:[],
                messages:[]   
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