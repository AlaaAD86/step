import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditiqueComponent } from './editique/editique.component';
import { NumerisationComponent } from './numerisation/numerisation.component';
import { TraitementDonneesComponent } from './traitement-donnees/traitement-donnees.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'numerisation', component: NumerisationComponent},
    {path: 'traitement-de-donnees', component: TraitementDonneesComponent},
    {path: 'editique', component: EditiqueComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FluxDocRoutingModule { }
