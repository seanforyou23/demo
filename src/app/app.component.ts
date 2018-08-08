import { Component } from '@angular/core';

import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PFNG Demo';
  activeTab: string = '';

  tabSelected($event: TabDirective): void {
    this.activeTab = $event.heading;
    console.log($event);
  }

}
