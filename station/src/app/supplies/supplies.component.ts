import { Component, OnInit } from '@angular/core';
import { Supply} from '../supply';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements OnInit {




  constructor(private http:Http) { }

  ngOnInit() {
  }

  Expired():Date {
    return()
  }

}
