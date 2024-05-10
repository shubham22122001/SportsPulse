import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// important import below from here backend is connected http://localhost:8080 (spring)
import { environment } from '../../environments/environment.development';
// ApiCallService is a reusable Angular service that encapsulates HTTP communication logic using Angular's HttpClient module, making it easier to manage and reuse HTTP requests throughout the application.
@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private _httpClient: HttpClient) {}
  getAllMatches() {
    return this._httpClient.get(`${environment.apiUrl}/match`);
  }
  getLiveMatches() {
    return this._httpClient.get(`${environment.apiUrl}/match/live`);
  }
  getPointsTable() {
    return this._httpClient.get(`${environment.apiUrl}/match/point-table`);
  }
}
