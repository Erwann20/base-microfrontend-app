import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, AppRoutingModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/poc-angular' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
