import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AppComponent }  from './app.component';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService }         from './hero.service';
import { DashboardComponent} from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { HttpModule }    from '@angular/http';
@NgModule({
  imports:      [ BrowserModule, FormsModule ,  HttpModule, AppRoutingModule],
  declarations: [ AppComponent , HeroDetailComponent,  HeroesComponent, DashboardComponent],
  bootstrap:    [ AppComponent ],
  providers: [HeroService]
})
export class AppModule { }
