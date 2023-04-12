import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private apiUrl = 'https://localhost:44314/api/Invoice'; // replace with your API endpoint
  
  constructor(private http: HttpClient) { }

  public createInvoice(invoice : Invoice): Observable<Invoice>{
    return this.http.post<Invoice>(this.apiUrl, invoice);
  }
}