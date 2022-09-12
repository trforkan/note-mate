import { DialogComponent } from './components/dialog/dialog.component';
import { MaterialModule } from './../material/material.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    HomeComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild([
      { path:"", component: HomeComponent }
    ])
  ]
})
export class PagesModule { }
