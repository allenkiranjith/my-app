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
  currentSortColumn: string;
  isCurrentSortAscending = true;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getData().subscribe(results => {
      this.data = <IUserData[]> results;
      console.log(this.data);
    });
  }

  sortData(columnName: string) {
    this.isCurrentSortAscending = this.currentSortColumn === columnName ? !this.isCurrentSortAscending : true;
    this.currentSortColumn = columnName;
    this.data = this.data.sort((a, b) => {
      return  (a[columnName] < b[columnName]) ? -1 * (this.isCurrentSortAscending ? 1 : -1) : (this.isCurrentSortAscending ? 1 : -1);
      });
    }

}
