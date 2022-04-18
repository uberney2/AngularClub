import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Shop } from '../Models/shop';
import { DataSharedService } from '../services/data-shared.service';

@Component({
  selector: 'app-additions',
  templateUrl: './additions.component.html',
  styleUrls: ['./additions.component.css']
})
export class AdditionsComponent implements OnInit {

  selectedSauces: any[] = [];
 

  shop = new Shop();

  @Output() selectedSaucesEvent = new EventEmitter<any>()

  constructor(private dialogRef : MatDialog, private _sharedService : DataSharedService) {

   }

  ngOnInit(): void {
  }

  closeDialog(){
    this.selectedSaucesEvent.emit(this.selectedSauces);
    
  }

 

}
