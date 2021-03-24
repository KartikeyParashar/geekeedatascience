import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { FollowersComponent } from './components/followers/followers.component';
import { SocialNetworkComponent } from './components/social-network/social-network.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GoalandmotiveComponent } from './components/goalandmotive/goalandmotive.component';
import { StorylineComponent } from './components/storyline/storyline.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FollowersComponent,
    SocialNetworkComponent,
    GoalandmotiveComponent,
    StorylineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
