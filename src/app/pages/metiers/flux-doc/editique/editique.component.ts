import { Component, OnInit } from '@angular/core';
import { IprestationsCarousel } from 'src/app/interfaces/iprestations-carousel';
import { PrestationsCarouselService } from 'src/app/services/prestations-carousel.service';

@Component({
  selector: 'app-editique',
  templateUrl: './editique.component.html',
  styleUrls: ['./editique.component.css']
})
export class EditiqueComponent implements OnInit {

  slides: IprestationsCarousel[] = []

  constructor(public prestationServ: PrestationsCarouselService) {}

  ngOnInit(): void {
    this.prestationServ.getPrestations();    
  }

}
