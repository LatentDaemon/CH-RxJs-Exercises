import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-call-based-on-call',
  templateUrl: './call-based-on-call.component.html',
  styleUrls: ['./call-based-on-call.component.css'],
})
export class CallBasedOnCallComponent implements OnInit {
  rockets: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly http: HttpClient
  ) {}

  ngOnInit() {
    console.log('hello');
    this.getRockets();
    this.setupRocketData();
  }

  setupRocketData() {
    this.activatedRoute.params.subscribe((params) => console.log(params['id']));
  }

  getRockets() {
    let httpParams = new HttpParams().set('limit', 4).set('offset', 3);

    this.http
      .get('https://api.spacexdata.com/v3/rockets', { params: httpParams })
      .subscribe((rockets) => console.log(rockets));
  }
}
