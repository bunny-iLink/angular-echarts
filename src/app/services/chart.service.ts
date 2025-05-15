// src/app/services/chart.service.ts
import { Injectable } from '@angular/core';
import { RealWorldMetric } from '../models/chart-data.model';

@Injectable({ providedIn: 'root' })
export class ChartService {
  getUpdatedTechUsageData(): RealWorldMetric[] {
    return [
      {
        label: 'Organic Search',
        percentage: 45,
        description: 'Visitors who came via search engines',
        colorCode: '#4e79a7'
      },
      {
        label: 'Direct',
        percentage: 20,
        description: 'Users who typed the URL directly into the browser',
        colorCode: '#f28e2b'
      },
      {
        label: 'Referral',
        percentage: 15,
        description: 'Traffic from external websites linking to ours',
        colorCode: '#e15759'
      },
      {
        label: 'Social Media',
        percentage: 10,
        description: 'Traffic from platforms like Facebook, Twitter, LinkedIn',
        colorCode: '#76b7b2'
      },
      {
        label: 'Email Campaigns',
        percentage: 10,
        description: 'Users coming from marketing newsletters',
        colorCode: '#59a14f'
      }
    ];
  }
}
