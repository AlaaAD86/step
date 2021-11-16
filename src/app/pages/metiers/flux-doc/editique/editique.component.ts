import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-editique',
  templateUrl: './editique.component.html',
  styleUrls: ['./editique.component.css']
})
export class EditiqueComponent implements OnInit {

 

  constructor() {}

  ngOnInit(): void {
     
  }
  picto="assets/svg/stack.svg" ;
  title="Editique" ;
  text="Flux entrants ou sortants, on s’occupe de tout !"; 
  bg="assets/metiers/flux-doc/flux_doc_5.jpg";
}
