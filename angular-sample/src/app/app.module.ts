import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TopBarMenuComponent } from './shared/layout/navigation/top-bar-menu/top-bar-menu.component';
import { DashboardComponent } from './shared/layout/dashboard/dashboard.component';
import { AppCommonModule } from './shared/app-common/app-common.module';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzButtonModule, MzInputModule, MzValidationModule } from 'ng2-materialize';


@NgModule({
  declarations: [
    AppComponent,
    TopBarMenuComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AppCommonModule.forRoot(),
    BrowserAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzValidationModule
  ],
  exports: [
    MzInputModule,
    MzValidationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
