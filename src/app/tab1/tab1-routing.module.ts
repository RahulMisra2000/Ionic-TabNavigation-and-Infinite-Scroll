import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AboutPage } from '../about/about.page';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'about',
    loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
