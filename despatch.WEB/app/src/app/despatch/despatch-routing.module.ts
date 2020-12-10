import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadApkComponent } from './componnents/download-apk/download-apk.component';
import { DespatchComponent } from './despatch.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'download-apk',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DespatchComponent,
    children: [
      {
        path: 'download-apk',
        component: DownloadApkComponent
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DespatchRoutingModule { }
