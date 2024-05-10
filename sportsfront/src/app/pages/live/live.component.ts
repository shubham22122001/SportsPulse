  import { Component, OnInit } from '@angular/core';
  import { ApiCallService } from '../../services/api-call.service';
  import { error } from 'console';
  import { FormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { MatchCardComponent } from "../../components/match-card/match-card.component";
  import { NgxTypedJsModule } from 'ngx-typed-js';


  @Component({
      selector: 'app-live',
      standalone: true,
      templateUrl: './live.component.html',
      styleUrls: ['./live.component.css'],
      imports: [CommonModule, MatchCardComponent,NgxTypedJsModule]
  })
  export class LiveComponent implements OnInit {
    liveMatches:any
    loading = false
    constructor(private _api:ApiCallService){

    }
  //   Constructor: The constructor injects an instance of ApiCallService into the component. This allows the component to use methods provided by the ApiCallService to fetch live match data.
  // ngOnInit() Method: This method is part of the OnInit interface and is called by Angular when the component is initialized. Inside ngOnInit(), the component calls the getLiveMatches() method of the injected ApiCallService instance. It subscribes to the Observable returned by getLiveMatches() to handle the asynchronous response. When the data is received successfully, it logs the data to the console. If an error occurs during the HTTP request, it logs the error to the console as well.
    ngOnInit(): void {
      this.loadLiveMatches();
      
    }


    private loadLiveMatches() {
      this._api.getLiveMatches().subscribe({
        next: data => {
          console.log(data);
          this.liveMatches=data;
          this.loading = false
        },
        error: error => {
          console.log(error);
          this.loading = false
        }
      });
    }
    refreshScore() {

      
      this.loadLiveMatches()
    }
  }
