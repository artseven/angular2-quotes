import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { CountersComponent } from './counters/counters.component';
import { ChuckNorrisPageComponent } from './chuck-norris-page/chuck-norris-page.component';


const routes: Routes = [
  //  http://localhost:4200/quotes
  { path: 'quotes', component: QuoteListComponent},
  // http:/localhost:4200/home
  {path: 'home', component: MyHomeComponent},
  // http:/localhost:4200/about
  { path: 'about' , component: MyAboutComponent},
  // http://localhost:4200/-->http://localhost:4200/home
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'contacts', component: ContactListComponent},
  {path: 'contact/:id', component: ContactComponent},
  {path: 'counters', component: CountersComponent},
  {path: 'chuck', component: ChuckNorrisPageComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    MyHomeComponent,
    MyAboutComponent,
    ContactListComponent,
    ContactComponent,
    CountersComponent,
    ChuckNorrisPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
