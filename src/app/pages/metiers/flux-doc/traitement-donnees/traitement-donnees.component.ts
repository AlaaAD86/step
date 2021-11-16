import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traitement-donnees',
  templateUrl: './traitement-donnees.component.html',
  styleUrls: ['./traitement-donnees.component.css']
})
export class TraitementDonneesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  picto="assets/svg/stack.svg";
   title="Traitement de données";
    text="La conservation et le partage de documents patrimoniaux";
     bg="assets/metiers/flux-doc/flux_doc_4.jpg"
}
