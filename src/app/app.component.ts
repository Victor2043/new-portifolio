import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portifolio';
  crudUrl = 'https://api-cars-frontend.herokuapp.com'
  dashboardUrl = 'https://demo-real-time-dashboard.herokuapp.com'

}
