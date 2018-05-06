import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

import { MatSliderModule,
  MatButtonModule,
  MatListModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AudioRecorderComponent } from './audio-recorder/audio-recorder.component';
import { WindowRef } from './audio-recorder/window.service';

import { AudioPlayerService } from './audio-player/audio-player.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StaticSpectrogramComponent } from './static-spectrogram/static-spectrogram.component';
import { StaticSpectrogramPageComponent } from './static-spectrogram-page/static-spectrogram-page.component';

// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'login', component: LoginComponent },
//   { path: '**', component: NotFoundComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    AudioPlayerComponent,
    AudioRecorderComponent,
    HomeComponent,
    AboutComponent,
    StaticSpectrogramComponent,
    StaticSpectrogramPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatSelectModule
  ],
  providers: [
    AudioPlayerComponent,
    HomeComponent,
    WindowRef,
    AudioPlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
