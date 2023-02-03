import { PathLocationStrategy } from '@angular/common';
import { LocalizedString } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocalizedString,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
