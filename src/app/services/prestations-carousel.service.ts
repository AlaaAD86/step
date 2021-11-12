import { Injectable } from '@angular/core';
import { IprestationsCarousel } from '../interfaces/iprestations-carousel';

@Injectable({
  providedIn: 'root'
})
export class PrestationsCarouselService {




  prestationsDetails: IprestationsCarousel[] = [];

 
  constructor() { }

  getPrestations() {
    // return this.httpService.get('./prestations-carousel.json').subscribe((data)=> {
    //   console.log(data);
      
    // });
        
    this.prestationsDetails =  [{
      "listTitle": "Numérisation",
      "img": "../../../assets/solutions/formations.jpg",
      "title": "Numérisation",
      "text": "Numérisation hauts volumes, patrimoniale, microformes, hors format, grand format et traitement de données. Editique, impression déportée de courriers de gestion"
  },
  {
      "listTitle": "Traitement de données",
      "img": "../../../assets/solutions/formations.jpg",
      "title": "Traitement de données",
      "text": "Numérisation hauts volumes, patrimoniale, microformes, hors format, grand format et traitement de données. Editique, impression déportée de courriers de gestion"
  },
  {
      "listTitle": "Editique",
      "img": "../../../assets/solutions/formations.jpg",
      "title": "Editique",
      "text": "Numérisation hauts volumes, patrimoniale, microformes, hors format, grand format et traitement de données. Editique, impression déportée de courriers de gestion"
  }
]
  }


  
}
