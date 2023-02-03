import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ]
})
export class AppRoutingModule { }
