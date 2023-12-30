import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Provider } from "../../provider/provider";
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public constructor(public http: HttpClient, public provider: Provider) {}

  public call(text, session_id): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const link = this.provider.apiUrl.watsoncall;
    const bodyObject = {
      text,
      session_id
    };
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

  public getsessionid(): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const link = this.provider.apiUrl.getsessionid;
    console.log('log of url',link)
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
