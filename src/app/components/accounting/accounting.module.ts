import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailySummaryComponent } from './daily-summary/daily-summary.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "../common/calendar/calendar.module";
import { BuyingComponent } from './buying/buying.component';
import { SellingComponent } from './selling/selling.component';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { ProfitLossSheetComponent } from './profit-loss-sheet/profit-loss-sheet.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule
  ],
  declarations: [
    DailySummaryComponent,
    BuyingComponent,
    SellingComponent,
    BalanceSheetComponent,
    ProfitLossSheetComponent,
    PurchaseOrderComponent
  ]
})
export class AccountingModule { }
