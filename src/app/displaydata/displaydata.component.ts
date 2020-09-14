import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {

  constructor(public _local:RestService) { }
  data:any[];


  ngOnInit(): void {
     this._local.AddData().subscribe((s:any)=>this.data=s);
  }

}
