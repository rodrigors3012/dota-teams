import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroTableComponent } from './hero-table/hero-table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatchesTableComponent } from './matches-table/matches-table.component';
import { PlayerTableComponent } from './player-table/player-table.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent} from './toolbar/toolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroTableComponent,
    MatchesTableComponent,
    PlayerTableComponent,
    SearchBarComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

/**
 * The base application module. 
 */
export class AppModule{ 
  
}
