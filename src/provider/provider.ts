import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class Provider {
  public apiUrl: any;
  public userData: any = null;
  public token: any = null;
  public rawData: any = null;
  public url: any = "istio-ingressgateway-istio-system.apps.ocpclustervj.os.fyre.ibm.com";
  public accountsUrl = "accounts-api-bankdemo.apps.democluster.emea-dst-techlab.com";
  public authUrl = "auth-api-bankdemo.apps.democluster.emea-dst-techlab.com";
  public abi: any;
  constructor() {
    this.apiUrl = {
      login: "http://" + this.authUrl + "/authsvc/login",
      signup: "http://" + this.authUrl + "/authsvc/createUser",
      book: "http://" + this.url + "/bookingsvc/book",
      listBookingByUser:
        "http://" + this.url + "/bookingsvc/listBookingByUser",
      checkin: "http://" + this.url + "/bookingsvc/checkin",
      listFlightsByID: "http://" + this.url + "/listingsvc/listFlights",
      listFlights: "http://" + this.url + "/listingsvc/searchFlights",
      listAllFlights: "http://" + this.url + "/listingsvc/listFlights",
      map:  "http://" + this.url + "/mapsvc/getMap",
      email: 'http://' +this.url + "/celerysvc/postEmail",
      addNewAccount: 'http://' + this.accountsUrl + "/accountsvc/listAccount",
      getAccount: 'http://' + this.accountsUrl + "/accountsvc/listAccount",
      getAccountById: 'http://' + this.accountsUrl + "/accountsvc/listAccount",
      getAccountByID: 'http://' + this.accountsUrl + "/accountsvc/listAccountID",
      updateAccount: 'http://' + this.accountsUrl + "/accountsvc/listAccount",
      activate: 'http://' + this.accountsUrl + "/accountsvc/activate",
      paybill: 'http://' + this.accountsUrl + "/accountsvc/bill",
      balanceUpdate: 'http://' + this.accountsUrl + "/accountsvc/balanceUpdate",
      addTransaction: 'http://' + this.accountsUrl + "/accountsvc/transaction",
      deleteAccount: 'http://' + this.accountsUrl + "/accountsvc/listAccount",
      getsessionid:'http://' +this.url + "/aisvc/session"  /*, 
      watsoncall: 'http://' +this.url + "/aisvc/watson",
      sms: 'http://' +this.url + "/send",
      odm:'http://' +this.url + "/odm",
      customerfeed: 'http://' + this.accountsUrl + "/accountsvc/customerfeed",
      ledgerfeed: 'http://' + this.accountsUrl + "/accountsvc/ledgerfeed",
      utilitybill: 'http://' + this.accountsUrl + "/accountsvc/utilitybill",
      */
    };
  }
}