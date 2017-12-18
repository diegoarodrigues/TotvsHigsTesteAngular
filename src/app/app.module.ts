import { HttpModule } from '@angular/http';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';



import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { DropdownService } from './services/dropdown.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent
  ],
  providers: [DropdownService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }