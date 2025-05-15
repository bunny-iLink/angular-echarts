// src/app/components/chart/chart.component.ts
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import * as echarts from 'echarts';
import { ChartService } from '../../services/chart.service';
import { RealWorldMetric } from '../../models/chart-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chartContainer') chartContainer!: ElementRef;

  chartInstance!: echarts.ECharts;
  chartType: string = 'pie';
  chartOptions: any;
  chartData: RealWorldMetric[] = [];

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chartData = this.chartService.getUpdatedTechUsageData();
  }

  ngAfterViewInit(): void {
    this.initChart();
  }

  @HostListener('window:resize')
  onResize() {
    if (this.chartInstance) {
      this.chartInstance.resize();
    }
  }

  onChartTypeChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.chartType = value;
    this.initChart();
  }

  initChart(): void {
    if (!this.chartContainer?.nativeElement) return;

    this.chartInstance = echarts.init(this.chartContainer.nativeElement);

    const defaultColors = ['#4e79a7', '#f28e2b', '#e15759', '#76b7b2', '#59a14f', '#edc948', '#b07aa1'];

    this.chartOptions = {
      backgroundColor: '#f4f7fb',
      title: {
        text: 'Website Traffic Source Breakdown (%)',
        left: 'center',
        textStyle: {
          fontSize: 20,
          color: '#003366'
        }
      },

      tooltip: {
        trigger: 'item',
        backgroundColor: '#ffffff',
        borderColor: '#333',
        borderWidth: 1,
        textStyle: {
          color: '#000',
          fontWeight: 'bold',
          fontSize: 14
        },
        formatter: (params: any) => {
          const item = this.chartData[params.dataIndex];
          return `${params.name}: ${params.value}%<br/><small>${item?.description}</small>`;
        }
      },

      xAxis: this.chartType !== 'pie' ? {
        type: 'category',
        data: this.chartData.map(d => d.label),
        axisLine: { lineStyle: { color: '#000' } },
        axisLabel: { color: '#000', fontSize: 14, fontWeight: 'bold' },
        splitLine: { show: false }
      } : undefined,

      yAxis: this.chartType !== 'pie' ? {
        type: 'value',
        axisLine: { lineStyle: { color: '#000' } },
        axisLabel: { color: '#000', fontSize: 14, fontWeight: 'bold' },
        splitLine: { lineStyle: { color: '#ccc' } }
      } : undefined,

      series: [
        {
          name: 'Traffic',
          type: this.chartType,
          data: this.chartData.map((d, i) => ({
            value: d.percentage,
            name: d.label,
            itemStyle: {
              color: d.colorCode || defaultColors[i % defaultColors.length],
              borderRadius: this.chartType === 'bar' ? [6, 6, 0, 0] : 0
            }
          })),
          radius: this.chartType === 'pie' ? '60%' : undefined,
          barWidth: this.chartType === 'bar' ? '50%' : undefined,

          emphasis: {
            scale: true,
            itemStyle: {
              borderColor: '#000',
              borderWidth: 2,
              shadowBlur: 15,
              shadowColor: 'rgba(0, 0, 0, 0.6)'
            },
            label: {
              show: true,
              fontWeight: 'bold',
              color: '#000'
            }
          },

          animationEasing: 'elasticOut',
          animationDuration: 1000
        }
      ]
    };

    this.chartInstance.setOption(this.chartOptions);
  }
}
