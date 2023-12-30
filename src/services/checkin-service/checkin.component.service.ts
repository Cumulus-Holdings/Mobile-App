
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Provider } from '../../provider/provider';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {
    public constructor(public http: HttpClient, public provider:Provider) {
    }

    public checkin(BookingID,UserID): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.provider.token
        });
        const link = this.provider.apiUrl.checkin+'/'+String(BookingID)+'/'+String(UserID)
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