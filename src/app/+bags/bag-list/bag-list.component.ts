import { BagService } from './../shared/bag.service';
import { HttpService } from 'app/shared/http/http.service';
import { Component, OnInit } from '@angular/core';

import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";

@Component({
  selector: 'app-bag-list',
  templateUrl: './bag-list.component.html',
  styleUrls: ['./bag-list.component.css']
})
export class BagListComponent implements OnInit {

  bagsList = [];

  constructor(private bagService: BagService) { }

  ngOnInit() {
    this.loadBags();
  }

  loadBags() {
    this.bagService.getAll().subscribe(r => {
      this.bagsList = r;
    });
  }

}
