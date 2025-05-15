import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Apache ECharts: Interactive, Customizable Charting Library for Modern Web Applications';
  description = `
  <strong>Apache ECharts</strong> is an open-source JavaScript visualization library for building interactive, highly customizable charts for the web.

  <strong>✨ Key Features:</strong><br/>
  • Wide variety of chart types
  • Smooth interactivity (tooltips, zoom, brush)
  • Fully customizable styles and themes
  • Responsive and high-performance rendering
  • Cross-browser and cross-platform compatibility
  • Declarative, data-driven configuration
  • Accessible and internationalization-ready
  • Modular and extensible architecture

  Ideal for dashboards, real-time data monitoring, financial charts, and any rich web-based visualization needs.
`;
}
