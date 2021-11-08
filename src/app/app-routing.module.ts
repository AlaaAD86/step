import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', loadChildren: () => import('./pages/accueil/accueil.module').then(m => m.AccueilModule) },
  { path: 'missions', loadChildren: ()=> import("./pages/missions/missions.module").then(m => m.MissionsModule) },
  { path: 'metiers', loadChildren: ()=> import("./pages/metiers/metiers.module").then(m => m.MetiersModule) },
  { path: 'contact', loadChildren: ()=> import("./pages/contacts/contacts.module").then(m => m.ContactsModule) }
  // {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
