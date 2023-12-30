
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Provider } from '../../provider/provider'
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class DashboardService {
    public constructor(public http: HttpClient, public provider:Provider) {
    }

    public list(lat,long): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });

        const link = this.provider.apiUrl.map
        console.log('linkkk',link)
        const bodyObject = {
            lat,
            long
          };
          console.log('bodyyyy',bodyObject)
        return this.http.post(link, bodyObject, {headers}) // ...using post request
            .pipe(
                map((res: any) => res),
                catchError((error: any) => {
                    console.log(error);
                    return Observable.throw(error.json().error || 'Server error');
                })
            );
    }
}