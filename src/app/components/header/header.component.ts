import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'My Daily Focus Tracker';
  description = 'Gain insights into how I spend my day — monitor time spent on tasks, track progress, and identify areas for improvement. This app helps me stay focused and productive by providing a clear overview of my daily activities. With this tool, I can easily analyze my time usage and make informed decisions to enhance my productivity.';
}
