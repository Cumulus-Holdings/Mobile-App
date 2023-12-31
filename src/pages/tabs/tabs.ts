import { Component } from '@angular/core';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {DashboardPage} from '../dashboard/dashboard'
import {ChatPage} from '../chat/chat'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = DashboardPage;
  tab5Root = ChatPage;

  constructor(statusBar: StatusBar) {
    statusBar.backgroundColorByHexString('#000000');
  }
}
