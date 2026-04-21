import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '@domain/models';
import { BadgeComponent } from '../../atoms/badge/badge.component';

@Component({
  selector: 'app-transactions-table',
  imports: [CommonModule, BadgeComponent],
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
})
export class TransactionsTableComponent {
  transactions = input.required<Transaction[]>();
}
