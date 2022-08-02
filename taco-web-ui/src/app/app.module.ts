import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CloudTitleComponent } from './cloud-title/cloud-title.component';
import { HomeComponent } from './home/home.component';
import { TacoHeaderComponent } from './taco-header/taco-header.component';
import { TacoFooterComponent } from './taco-footer/taco-footer.component';
import { BigButtonComponent } from './big-button/big-button.component';
import { GroupBoxComponent } from './group-box/group-box.component';
import { DesignComponent } from './design/design.component';
import { ApiService } from './api/api.service'

@NgModule({
  declarations: [
    AppComponent,
    CloudTitleComponent,
    HomeComponent,
    TacoHeaderComponent,
    TacoFooterComponent,
    BigButtonComponent,
    GroupBoxComponent,
    DesignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
