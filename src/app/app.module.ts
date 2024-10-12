import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BecomARenterComponent } from './becom-arenter/becom-arenter.component';
import { DrtailsComponent } from './drtails/drtails.component';
import { SinglCarComponent } from './singl-car/singl-car.component';
import { AllCarComponent } from './all-car/all-car.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BecomARenterComponent,
    DrtailsComponent,
    SinglCarComponent,
    AllCarComponent,
    HowItWorkComponent,
    WhyChooseUsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
