import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'splash4pools-web1';
  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['']);
  }
}
