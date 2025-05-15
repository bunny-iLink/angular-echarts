import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, HeaderComponent],  // Import RouterModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }

  navigateTo(path: string): void {
    this.router.navigate([path]);
    console.log("hello");
  }
}
