import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutPage } from '../pages/about/about';
import { ShopPage } from '../pages/shop/shop';

import { LoginPage } from '../pages/login/login';
import { OffersPage } from '../pages/offers/offers';
import { SignupPage } from '../pages/signup/signup';
import { BookingPage } from '../pages/booking/booking';
import {MapPage} from '../pages/map/map'
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
//import { TabsPage } from '../pages/tabs/tabs';
import {LoginService} from '../services/login-service/login.component.service'
import {SignupService} from '../services/signup-service/signup.component.service'
import { DashboardPage } from '../pages/dashboard/dashboard';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import {DashboardService} from '../pages/dashboard/dashboard.service'
import {Provider} from '../provider/provider'
import {ListingService} from '../services/listing-schedule-service/listing.component.service'
import { SharedModule } from '../shared/shared.module';
import {BookingService} from '../services/booking-service/booking.component.service'
import {ChatService} from '../services/chat-service/chat.component.service'
import {EmailService} from '../services/email-service/email.component.service'
import {CheckinService} from '../services/checkin-service/checkin.component.service'
import {AllservicesService} from '../services/allservices/allservices.component.service'
//import { Geolocation } from "@ionic-native/geolocation/ngx";
import {OdmService} from '../services/odm-service/odm.component.service'
import {ChatPage} from '../pages/chat/chat'
import { CarouselComponent } from '../components/carousel/carousel';

@NgModule({
  declarations: [
    CarouselComponent,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
//    TabsPage,
    LoginPage,
    SignupPage,
    BookingPage,
    DashboardPage,
    MapPage,
    OffersPage,
    ChatPage,
    ShopPage
  ],
  imports: [
    // NgxGaugeModule,
    //NativeHttpWrapper,
    SharedModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
//    TabsPage,
    LoginPage,
    SignupPage,
    BookingPage,
    DashboardPage,
    MapPage,
    OffersPage,
    ChatPage,
    ShopPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DashboardService,
    LoginService,
    SignupService,
    Provider,
    ListingService,
    BookingService,
    CheckinService,
    AllservicesService,
//    Geolocation,
    EmailService,
    OdmService,
    ChatService,
    MapPage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
