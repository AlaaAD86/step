import { Component, OnInit } from '@angular/core';


export interface Card {
  content: string,
  title: string,
  bg: string,
  lien: string
}


@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {

 
  image="../../../assets/corners/white_yellow.png" 
  title="Découvrez nos " 
  titleBold="missions" 
  text="20 ans d’innovation au service de l’inclusion" 
  bg="../../../assets/missions/mission.jpg"

  
  p1 = `Implantée à Pau (Sud-Ouest), en Nouvelle Aquitaine (France), STEP est une entreprise citoyenne et responsable qui mise sur l’humain et sa diversité. `
  
  p2 = `Expert du traitement des flux documentaires et de l’environnement informatique associé, STEP s’est imposé, en une vingtaine d'années dans le domaine des services numériques et accompagne aujourd’hui de grands comptes et de nombreuses PMEI. Elle démontre que la compétitivité et le développement de services innovants à destination des professionnels (ingénierie informatique, gestion des flux documentaires…) riment avec insertion sociale et que la fracture numérique n’est pas une fatalité.`

  p3 = `Entreprise engagée en Nouvelle Aquitaine, elle a su diversifier son offre au fil du temps et propose un modèle vertueux sur l’ensemble de ses pôles d’activité via des solutions globales tout en ayant à cœur de promouvoir la responsabilité vis à vis du territoire, de la collectivité, ou des personnes aux parcours fragilisés qu’elle rencontre et soutient, sans crainte d’associer compétitivité et offre de services.`
  
  p4 = `STEP, c’est plusieurs métiers dédiés, de la gestion des flux documentaires à la formation au numérique, en passant par les services de territoire, le tout associé à des expertises pointues.`
  

  constructor() { }

  ngOnInit(): void {
  }

  gridColumns = 3;

  cards: Card[] = [
    {'title':'Step', 'content': 'Une histoire qui dure depuis 20 ans', 'bg':'../../../assets/missions/step.jpg', 'lien':'/missions/valeurs'}, 
    {'title':'Gouvernance', 'content': '«Personne n’est inemployable» tel est notre credo!', 'bg':'../../../assets/missions/gouvernance.jpg', 'lien':'/missions/gouvernance' }, 
    {'title':'Partenaires', 'content': 'Ils nous font confiance… et nous aussi' ,'bg':'../../../assets/missions/partners.jpg', 'lien':'/missions/partenaires'}
  ]

}
