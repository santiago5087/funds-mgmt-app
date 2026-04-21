import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { InvestmentFund } from '@domain/models';
import { BadgeComponent, ButtonComponent } from '../../atoms';

@Component({
  selector: 'app-fund-card',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, BadgeComponent, ButtonComponent],
  templateUrl: './fund-card.component.html',
  styleUrls: ['./fund-card.component.scss'],
})
export class FundCardComponent {
  fund = input.required<InvestmentFund>();
  isSubscribed = input<boolean>(false);
  
  onSubscribe = output<InvestmentFund>();
  onCancel = output<InvestmentFund>();
}
