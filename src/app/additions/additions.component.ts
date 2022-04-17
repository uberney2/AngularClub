import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-additions',
  templateUrl: './additions.component.html',
  styleUrls: ['./additions.component.css']
})
export class AdditionsComponent implements OnInit {

  selectedCities: string[] = [];

  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void {
  }
  closeDialog(){

    this.dialogRef.closeAll()
    }

}
