import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public id = 'falcon9';
  constructor(private router: Router) {}

  goToExercise1() {
    this.router.navigate(['/exercise', this.id]);
  }
}
