import { InvoiceHeader } from "./invoiceHeader";
import { InvoiceLine } from "./invoiceLine";

export interface Invoice {
    InvoiceHeader: InvoiceHeader;
    InvoiceLine: InvoiceLine[];
  }