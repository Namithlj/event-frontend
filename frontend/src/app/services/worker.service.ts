import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WorkerService {
  private baseUrl = 'http://localhost:8080/api/workers';

  constructor(private http: HttpClient) {}

  registerWorker(workerData: any): Observable<any> {
    return this.http.post(this.baseUrl, workerData);
  }
}
