import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChallengeDetailComponent } from './challenge-detail/challenge-detail.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { PnfComponent } from './pnf/pnf.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  { path: 'welcome', component: HomeComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  { path: '**', component: PnfComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChallengeDetailComponent,
    ChallengeComponent,
    PnfComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
