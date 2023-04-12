import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { InvoiceHeader } from '../models/invoiceHeader';

@Injectable({
  providedIn: 'root'
})
export class InvoiceHeaderService {
  private apiUrl = 'https://localhost:44314/api/InvoiceHeader'; // replace with your API endpoint
  
  constructor(private http: HttpClient) { }  

  public getInvoiceHeaders() : Observable<InvoiceHeader[]> {
    return this.http.get<InvoiceHeader[]>(this.apiUrl);
  }
}
