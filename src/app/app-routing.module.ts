import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StaticSpectrogramPageComponent } from './static-spectrogram-page/static-spectrogram-page.component';
import { RealTimeSpectrogramPageComponent } from './real-time-spectrogram-page/real-time-spectrogram-page.component';


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
    component: StaticSpectrogramPageComponent
  },
  {
    path: 'audio-recorder',
    component: RealTimeSpectrogramPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
