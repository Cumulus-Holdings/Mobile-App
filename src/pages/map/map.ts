import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import leaflet from "leaflet";
import "leaflet-routing-machine";
import { DashboardPage } from "../dashboard/dashboard";
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: "page-map",
  templateUrl: "map.html"
})
export class MapPage {
  @ViewChild("map") mapContainer: ElementRef;
  map: any;
  public values: any;
  public latlongs;
  public _url = "../assets/locations.json"
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.values = navParams.get("item");
    console.log(this.values);
  }
  public getJSON() {
    return this.http
      .get(this._url)
      .pipe(map((res: any) => res))
  }
  loadmap() {
    this.getJSON().subscribe((locations: any[]) => {    
      var map = leaflet.map('map').setView([24.4539, 54.3773], 7);
      var mapLink = 
          '<a href="http://openstreetmap.org">OpenStreetMap</a>';
      leaflet.tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; ' + mapLink + ' Contributors',
          maxZoom: 18,
          }).addTo(map);
    
      for (var i = 0; i < locations.length; i++) {
        var marker = new leaflet.marker([locations[i][1],locations[i][2]])
          .bindPopup(locations[i][0])
          .addTo(map);
      }
    });
  }
  ionViewDidLoad() {
    this.loadmap();
  }
  goback() {
    this.navCtrl.setRoot(DashboardPage);
  }

  ionViewWillLeave() {
    let tabs = document.querySelectorAll(".show-tabbar");
  }
  cancel() {
    this.navCtrl.pop();
  }
}
