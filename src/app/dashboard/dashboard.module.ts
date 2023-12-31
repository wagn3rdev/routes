import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DashboardRoutingModule } from './pages/dashboard-routing';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
