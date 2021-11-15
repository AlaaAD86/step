import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FluxDocRoutingModule } from './flux-doc-routing.module';
import { TraitementDonneesComponent } from './traitement-donnees/traitement-donnees.component';
import { EditiqueComponent } from './editique/editique.component';
import { NumerisationComponent } from './numerisation/numerisation.component';



@NgModule({
  declarations: [

    TraitementDonneesComponent,
    EditiqueComponent,
    NumerisationComponent
  ],
  imports: [
    FlexLayoutModule,
    FluxDocRoutingModule,
    SharedModule,
    CommonModule,
    FluxDocRoutingModule
  ]
})
export class FluxDocModule { }
