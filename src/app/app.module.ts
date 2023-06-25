import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgChartsModule } from 'ng2-charts';
import { PieComponent } from './pages/pie/pie.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, PieComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgChartsModule, MatDividerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
