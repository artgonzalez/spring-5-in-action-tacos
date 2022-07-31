import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CloudTitleComponent } from './cloud-title/cloud-title.component';
import { HomeComponent } from './home/home.component';
import { TacoHeaderComponent } from './taco-header/taco-header.component';
import { TacoFooterComponent } from './taco-footer/taco-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CloudTitleComponent,
    HomeComponent,
    TacoHeaderComponent,
    TacoFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
