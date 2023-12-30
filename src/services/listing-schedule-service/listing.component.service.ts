
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Provider } from '../../provider/provider';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
    public constructor(public http: HttpClient, public provider:Provider) {
    }

    public listFlights(Year,Month,DayOfMonth,Origin,Dest): Observable<any> {
        const headers = new HttpHeaders({
            "Content-Type": "application/json"
          });
        const link = this.provider.apiUrl.listFlights
        const bodyObject = {
            Year:Year,
            Month:Month,
            DayOfMonth:DayOfMonth,
            origin:Origin,
            dest:Dest
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

    public listAllFlights(): Observable<any> {
        const headers = new HttpHeaders({
            "Content-Type": "application/json"
          });
        const link = this.provider.apiUrl.listAllFlights
        return this.http
        .post(link, {headers}) // ...using post request
        .pipe(
          map((res: any) => res),
          catchError((error: any) => {
            console.log(error);
            return Observable.throw(error.json().error || "Server error");
          })
        );
    }

    public listFlightsByID(ID): Observable<any> {
        const headers = new HttpHeaders({
            "Content-Type": "application/json"
          });
        const link = this.provider.apiUrl.listFlightsByID+'/'+String(ID)
        return this.http
        .get(link, {headers}) // ...using post request
        .pipe(
          map((res: any) => res),
          catchError((error: any) => {
            console.log(error);
            return Observable.throw(error.json().error || "Server error");
          })
        );
    }
}