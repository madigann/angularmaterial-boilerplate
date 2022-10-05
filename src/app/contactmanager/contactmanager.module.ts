import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
  {path: '', component: ContactmanagerAppComponent,
    children: [
      { path: '', component: MainContentComponent }
    ]
  },
  {path: '**', redirectTo: 'contactmanager'}
]

@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    SidenavComponent,
    MainContentComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactmanagerModule { }
