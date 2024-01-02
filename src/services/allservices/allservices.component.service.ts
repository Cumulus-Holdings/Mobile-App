
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Provider } from "../../provider/provider";
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllservicesService {
  public _url = "../assets/newAccount.json" 

  public constructor(public http: HttpClient, public provider: Provider) {}

  public getJSON() {
    return this.http
      .get(this._url)
      .pipe(map((res: any) => res))
  }
/*
  public customerfeed(object): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    });
    const link = this.provider.apiUrl.customerfeed;
    const bodyObject = object
    const bodyString = JSON.stringify(bodyObject); // Stringify payload
    console.log(bodyString);
    return this.http
      .post(link, bodyObject, options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }

  public ledgerfeed(object): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    });
    const link = this.provider.apiUrl.ledgerfeed;
    const bodyObject = object
    const bodyString = JSON.stringify(bodyObject); // Stringify payload
    return this.http
      .post(link, bodyString, options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }

  public utilitybill(object): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    });
    const link = this.provider.apiUrl.utilitybill;
    const bodyObject = object
    const bodyString = JSON.stringify(bodyObject); // Stringify payload
    return this.http
      .post(link, bodyString, options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }
*/
  public addNewAccount(ID): Observable<any> {
    const headers = new HttpHeaders({
        "Content-Type": "application/json"
      });
    const link = this.provider.apiUrl.addNewAccount;
    const bodyObject = this.getJSON();
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

  public getAccount(): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const link = this.provider.apiUrl.getAccount;
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

  public activate(ID): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const link = this.provider.apiUrl.activate;
    const bodyObject = {
        ID:ID
    };
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
/*
  public sms(msg, number): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const link = this.provider.apiUrl.sms;
    const bodyObject = {
      message:msg,
      reciever : number
    };
    const bodyString = JSON.stringify(bodyObject); // Stringify payload
    return this.http
      .post(link, bodyObject, options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }
*/
  public bill(ID): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const link = this.provider.apiUrl.paybill;
    const bodyObject = {
        ID:ID
    };
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

  public balanceUpdate(ID,balance): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const link = this.provider.apiUrl.balanceUpdate;
    const bodyObject = {
        ID:ID,
        balance:balance
    };
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

  public addTransaction(ID,Product,Price,AccountID,AccountName,Type,DateNow): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const link = this.provider.apiUrl.addTransaction;
    console.log("my id issss", ID)
    const bodyObject = {
        ID:ID,
        Product:Product,
        Price:Price,
        AccountID:AccountID,
        AccountName:AccountName,
        Type:Type,
        Date:DateNow

    };
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
/*
  public odm(cardType,cardTier, cardLimit, nameOnCard, cardStatus, cardOffers) : Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const link = this.provider.apiUrl.odm;
    const bodyObject = {
        cardType,
        cardTier,
        cardLimit,
        nameOnCard,
        cardStatus,
        cardOffers
    };
    const bodyString = JSON.stringify(bodyObject); // Stringify payload
    return this.http
      .post(link, bodyObject, options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }
*/

  public getAccountById(ID): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const link = this.provider.apiUrl.getAccountById+'/'+ID;
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

  public getAccountByID(ID): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const link = this.provider.apiUrl.getAccountByID+'/'+ID;
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
