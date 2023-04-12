export interface InvoiceLine {
    id: number;
    invoiceId: string;
    name: string;
    quantity: number;
    unitCode: string;
    unitPrice: number;
  }