import { Component, OnInit } from '@angular/core';
import { DataSharedService } from '../services/data-shared.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoices : any[] = []
  constructor(private _sharedService : DataSharedService) {
    this.invoices = this._sharedService.getInvoice().filter(Boolean);
   }

  ngOnInit(): void {
  }

}
