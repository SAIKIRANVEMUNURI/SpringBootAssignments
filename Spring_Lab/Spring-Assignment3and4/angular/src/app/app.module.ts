import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import {HttpClientModule} from '@angular/common/http';
import { AnoopComponent } from './anoop/anoop.component';
import { TrainerlistComponent } from './trainerlist/trainerlist.component';
import { AddtrainerComponent } from './addtrainer/addtrainer.component';
import { UpdatetrainerComponent } from './updatetrainer/updatetrainer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    ViewbookComponent,
    AnoopComponent,
    TrainerlistComponent,
    AddtrainerComponent,
    UpdatetrainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
