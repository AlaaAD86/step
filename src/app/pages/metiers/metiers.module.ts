import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetiersComponent } from './metiers.component';
import { MetiersRoutingModule } from './metiers-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { AtelierComponent } from './atelier/atelier.component';
import { ConciergerieComponent } from './conciergerie/conciergerie.component';
import { FluxDocComponent } from './flux-doc/flux-doc.component';
import { FormationComponent } from './formation/formation.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { StudioComponent } from './studio/studio.component';
import { ServicePostalComponent } from './service-postal/service-postal.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ApplicationsMetiersComponent } from './studio/applications-metiers/applications-metiers.component';
import { ApplicationsMobilesComponent } from './studio/applications-mobiles/applications-mobiles.component';
import { ApplicationsWebComponent } from './studio/applications-web/applications-web.component';
import { MaterielReemploiComponent } from './atelier/materiel-reemploi/materiel-reemploi.component';
import { AssistanceComponent } from './atelier/assistance/assistance.component';

const routes: Routes = [
  { path: '', component: MetiersComponent }
]

@NgModule({
  declarations: [
    MetiersComponent,
    AtelierComponent,
    ConciergerieComponent,
    FluxDocComponent,
    FormationComponent,
    LivraisonComponent,
    StudioComponent,
    ServicePostalComponent,
    // NumerisationComponent,
    // TraitementDonneesComponent,
    // EditiqueComponent,
    ApplicationsMetiersComponent,
    ApplicationsMobilesComponent,
    ApplicationsWebComponent,
    MaterielReemploiComponent,
    AssistanceComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    SharedModule,
    MetiersRoutingModule,
    RouterModule.forChild(routes)
  ],
})
export class MetiersModule { }
