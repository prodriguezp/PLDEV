import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css'],
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  standalone: true
})
export class HeaderComponent {
  constructor(private router: Router) {
  }

  isRouteActive(route: string): boolean {
    if (route === '/') {
      return this.router.url === '/';
    }
    return this.router.url.includes(route);
  }
}
