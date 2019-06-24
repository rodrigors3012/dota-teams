import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroTableComponent } from './hero-table/hero-table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatchesTableComponent } from './matches-table/matches-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroTableComponent,
    MatchesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ 
  
}
