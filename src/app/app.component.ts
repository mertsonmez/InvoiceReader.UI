import { Component } from '@angular/core';
import { Invoice } from './models/invoice';
import { InvoiceHeader } from './models/invoiceHeader';
import { InvoiceService } from './services/invoice.service';
import { InvoiceHeaderService } from './services/invoice-header.service';
import { InvoiceLineService } from './services/invoice-line.service';
import { InvoiceLine } from './models/invoiceLine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InvoiceReader.UI';
  invoiceHeaders: InvoiceHeader[] = [];
  invoiceLines: InvoiceLine[] = [];

  constructor(private invoiceService: InvoiceService,
    private invoiceHeaderService: InvoiceHeaderService,
    private invoiceLineService: InvoiceLineService) { }


  ngOnInit(): void {
    this.invoiceHeaderService.getInvoiceHeaders().subscribe({
      next: (invoiceHeaders) => {
        this.invoiceHeaders = invoiceHeaders;
        console.log(invoiceHeaders);
      },
      error: (response) => {
        console.log(response);
      }
    }) 
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const fileContent = event.target.result;

      const invoice: Invoice = JSON.parse(fileContent);      

      this.invoiceService.createInvoice(invoice).subscribe((response) => {
        console.log(response);
      });

    };
    reader.readAsText(selectedFile);

    this.reloadPageWithDelay(2);    
  }

  displayStyle = "none";
  selectedInvoice: any = null;

  openPopup(item: InvoiceHeader) {
    debugger;
    this.invoiceLineService.getInvoiceLines(item.invoiceId).subscribe({
      next: (invoiceLines) => {
        this.invoiceLines = invoiceLines;
      },
      error: (response) => {
        console.log(response);
      }
    })

    this.selectedInvoice = item; 
    

    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
    this.selectedInvoice = null;
  }

  public reloadPageWithDelay(delayInSeconds: number): void {
    setTimeout(() => {
      window.location.reload();
    }, delayInSeconds * 1000);
  }
}
