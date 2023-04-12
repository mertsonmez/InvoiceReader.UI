import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { InvoiceLine } from '../models/invoiceLine';

@Injectable({
  providedIn: 'root'
})
export class InvoiceLineService {
  private apiUrl = 'https://localhost:44314/api/InvoiceLine'; // replace with your API endpoint
  
  constructor(private http: HttpClient) { }  

  public getInvoiceLines(invoiceId: string) : Observable<InvoiceLine[]> {    
    // return this.http.get<InvoiceLine[]>(this.apiUrl);

    const url = `${this.apiUrl}?invoiceId=${invoiceId}`;
    return this.http.get<InvoiceLine[]>(url);
  }
}
