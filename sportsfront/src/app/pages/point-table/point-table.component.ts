import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent implements OnInit{
  pointTable:any
  tableheading:any
  constructor(private _api:ApiCallService){

  }
  ngOnInit(): void {
    this.loadTable();
  }


  private loadTable() {
    this._api.getPointsTable().subscribe({
      next: (data) => {
        // console.log(data);
        this.pointTable=data
        this.tableheading = [...this.pointTable[0]]
        // console.log(this.tableheading)
        this.pointTable = this.pointTable.filter((item: any, index: any) => index > 0);
      },
      error: error => { 
        console.log(error);
      }
    });
  }
}