import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'audits',
        loadChildren: () => import('./audits/audits.module').then(m => m.AuditsModule),
      },
      {
        path: 'docs',
        loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule),
      },
      {
        path: 'logs',
        loadChildren: () => import('./logs/logs.module').then(m => m.LogsModule),
      },
    ]),
  ],
})
export class AdminRoutingModule {}
