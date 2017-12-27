import { Component, OnInit } from '@angular/core';
import { IUserData } from '../shared/models/IUserData';
import { FormattedDataService } from './formatted-data.service';

@Component({
  selector: 'app-formatted-data',
  templateUrl: './formatted-data.component.html',
  styleUrls: ['./formatted-data.component.scss'],
  providers: [ FormattedDataService ]
})
export class FormattedDataComponent implements OnInit {

formattedData: any[] = []; 
data: IUserData[];
currentSortColumn: string;
isCurrentSortAscending = true;


  constructor(private formattedDataService: FormattedDataService) { 

  }

  ngOnInit() {
    this.formattedDataService.getData().subscribe(result => {
      this.data = <IUserData[]>result;
      this.formatData(this.data);
    });
  }

  formatData (data: IUserData[]){
    
    for(const record of data) {
      let matchFound = false;
      for( let formattedRecord of this.formattedData) {
        if( formattedRecord.name === record.name) {
          formattedRecord[ record.category] = record.amount;
          matchFound = true;
        }
      }

      if( !matchFound ) {
        this.formattedData.push({name: record.name, [record.category]: record.amount});
      }
    }
  }

sortData(columnName: string) {
    this.isCurrentSortAscending = this.currentSortColumn === columnName ? !this.isCurrentSortAscending : true;
    this.currentSortColumn = columnName;
    this.data = this.data.sort((a, b) => {
      return  (a[columnName] < b[columnName]) ? -1 * (this.isCurrentSortAscending ? 1 : -1) : (this.isCurrentSortAscending ? 1 : -1);
      });
    }
}
