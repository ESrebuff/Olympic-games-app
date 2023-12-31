import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { DetailsComponent } from './pages/details/details.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, PieChartComponent, DetailsComponent, LineChartComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgxChartsModule, BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    PieChartComponent
  ],
})
export class AppModule {}
