import { Component, OnInit } from '@angular/core';
import { IUserData } from '../shared/models/IUserData';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ DashboardService ]
})
export class DashboardComponent implements OnInit {

  data: IUserData[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getData().subscribe(results => {
      this.data = <IUserData[]> results;
      console.log(this.data);
    });
  }

}
