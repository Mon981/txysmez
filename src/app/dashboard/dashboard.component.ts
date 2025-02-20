import { Component } from '@angular/core';
import { TwyzCardComponent } from '../shared/txyz/twyz-card/twyz-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [TwyzCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
