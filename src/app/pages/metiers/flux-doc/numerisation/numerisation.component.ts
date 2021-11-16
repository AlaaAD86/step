import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numerisation',
  templateUrl: './numerisation.component.html',
  styleUrls: ['./numerisation.component.css']
})
export class NumerisationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  picto="assets/svg/stack.svg";
  title="Numérisation";
   text="La conservation et le partage de documents patrimoniaux";
    bg="assets/metiers/flux-doc/flux_doc_6.jpg"

}
