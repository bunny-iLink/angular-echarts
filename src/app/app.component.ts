import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; 
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,           // ✅ Add this line
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }

  title = 'E-charts';
}
