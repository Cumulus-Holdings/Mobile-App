import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Provider } from "../../provider/provider";
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  public constructor(public http: HttpClient, public provider: Provider) {}

  public booking(
    UserID,
    FlightID,
    OfferNamePricing,
    OfferTypePricing,
    CostPricing,
    OfferNameUpgrade,
    OfferTypeUpgrade,
    CostUpgrade
  ): Observable<any> {
    console.log(
      UserID,
      FlightID,
      OfferNamePricing,
      OfferTypePricing,
      CostPricing,
      OfferNameUpgrade,
      OfferTypeUpgrade,
      CostUpgrade
    );
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const link = this.provider.apiUrl.book;
    const bodyObject = {
      UserID,
      FlightID,
      OfferNamePricing,
      OfferTypePricing,
      CostPricing,
      OfferNameUpgrade,
      OfferTypeUpgrade,
      CostUpgrade
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

  public listBookingByUser(ID): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const link = this.provider.apiUrl.listBookingByUser + "/" + String(ID);
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
