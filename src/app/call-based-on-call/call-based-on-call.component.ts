import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap, switchMap } from 'rxjs';

@Component({
  selector: 'app-call-based-on-call',
  templateUrl: './call-based-on-call.component.html',
  styleUrls: ['./call-based-on-call.component.css'],
})
export class CallBasedOnCallComponent implements OnInit {
  rocket: any;
  baseUrl: string = 'https://api.spacexdata.com/v3/rockets/';
  constructor(
    private route: ActivatedRoute,
    private readonly http: HttpClient
  ) {}

  ngOnInit() {
    // this.getRockets();
    this.setupRocketData();
  }

  setupRocketData() {
    this.route.params
      .pipe(
        tap((result) => console.log(result.id)),
        switchMap((result) => this.http.get(`${this.baseUrl}${result.id}`))
      )
      .subscribe((result) => {
        this.rocket = result;
        console.log(result);
      });
  }

  // getRockets() {
  //   let httpParams = new HttpParams().set('limit', 4).set('offset', 3);

  //   this.http
  //     .get(this.baseUrl + 'rockets', { params: httpParams })
  //     .subscribe((rockets) => console.log(rockets));
  // }
}
