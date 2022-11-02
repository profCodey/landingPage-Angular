import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HeaderComponent } from './components/header/header.component';
import { FullImageComponent } from './components/full-image/full-image.component';
import { FirstImageComponent } from './components/first-image/first-image.component';
import { BodyTextComponent } from './components/body-text/body-text.component';
import { HalfImageComponent } from './components/half-image/half-image.component';
import { CtaComponent } from './components/cta/cta.component';
import { ContactBtnComponent } from './components/contact-btn/contact-btn.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HeaderComponent,
    FullImageComponent,
    FirstImageComponent,
    BodyTextComponent,
    HalfImageComponent,
    CtaComponent,
    ContactBtnComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
