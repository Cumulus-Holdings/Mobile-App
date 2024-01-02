import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { BookingPage } from "../booking/booking";
import { ListingService } from "../../services/listing-schedule-service/listing.component.service";
import { AlertController, LoadingController } from "ionic-angular";
import { AllservicesService } from "../../services/allservices/allservices.component.service";
import { Provider } from "../../provider/provider"
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public cards: any;
  public _url: any = "../assets/cards.json";
  public data;

  constructor(
    public navCtrl : NavController,
    public listingService : ListingService,
    private alertCtrl : AlertController,
    public loadingCtrl : LoadingController,
    public allservicesService : AllservicesService,
    public provider : Provider,
    public http : HttpClient
  ) {
    this.cards = this.getJSON();
  }

  public getJSON() {
      return this.http
        .get(this._url)
        .pipe(map((res: any) => res))
    }
  update(ID){
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.allservicesService.activate(ID).subscribe(data=>{
      this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(dataID=>{
        this.data = dataID[0];
        console.log("data newww",this.data)
        loading.dismiss()
/*        
        this.allservicesService.customerfeed(this.data['CurrentAccount']).subscribe(ledgerfeed=>{
          console.log('successs')
        }, (error)=> {
          console.log(error)
        })
*/
      },(error)=>{
        loading.dismiss()
      })
    },(error)=>{
      loading.dismiss()
    })
  }
  doRefresh(refresher) {
    console.log('Begin async operation');

    this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(dataID=>{
      this.data = dataID[0];
      console.log("data isssssssss",this.data)
      refresher.complete();
    },(error)=>{
      refresher.complete();
    })
    // setTimeout(() => {
    //   console.log('Async operation has ended');
    // }, 2000);
  }
  go(acc,balance){
    console.log("heree",acc,balance,this.data['Transaction']);
    this.navCtrl.push(BookingPage,{data:{
      acc:acc,
      balance:balance,
      tx:this.data['Transaction']
    }});
  }
  ionViewDidLoad() {
    console.log("vieww neter")
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(dataID=>{
      this.data = dataID[0];
      console.log("data isssssssss",this.data)
      loading.dismiss()
    },(error)=>{
      loading.dismiss()
    })
  }
}
