import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AudioRecorderComponent } from './audio-recorder/audio-recorder.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'audio-player',
    component: AudioPlayerComponent
  },
  {
    path: 'audio-recorder',
    component: AudioRecorderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
