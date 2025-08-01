import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WorkerService {
  private baseUrl = 'https://event-backend-rp99.onrender.com/api/workers';

  constructor(private http: HttpClient) {}

  // Register new worker/service
  registerWorker(workerData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, workerData);
  }

  // Fetch workers/services by pincode & type
  getWorkersByPincodeAndType(pincode: string, serviceType: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?pincode=${pincode}&type=${serviceType}`);
  }
}
