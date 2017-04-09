import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService }         from './hero.service';

import { RouterModule }   from '@angular/router';

RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  }
]);

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent , HeroDetailComponent,  HeroesComponent],
  bootstrap:    [ AppComponent ],
  providers: [HeroService]
})
export class AppModule { }