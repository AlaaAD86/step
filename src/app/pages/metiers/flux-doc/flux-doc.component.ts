import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-flux-doc',
  templateUrl: './flux-doc.component.html',
  styleUrls: ['./flux-doc.component.css']
})
export class FluxDocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  article = [
    {

      icon :"/assets/svg/stack.svg",
      titre : "Flux documentaires ",
      accroche : "La numérisation- notre cœur de métier – pour réduire vos charges d’exploitation !",
      text: `La numérisation  est notre activité phare
      avec un plateau de 600m2 pour l’accueillir. De l’audit des flux documentaires à la gestion complète de  processus d’affaires, nous traitons, la numérisation hauts volumes et la structuration de tout type documents (courriers entrants, dossiers techniques et administratifs A4/A3, hors formats, livres anciens, haute définition, sans contact, photographies, microfilms…) : tout est possible !

Nos services vous permettent de partager votre information avec souplesse, d’accéder en simultané à vos données numérisées, de maîtriser le flux de vos documents (papier ou électroniques), d’en avoir une traçabilité et d’en sécuriser les accès. 

Cela vous permet d’améliorer votre productivité et de vous concentrer sur votre cœur de métier en capitalisant sur les actifs immatériels de votre structure. 
      
POINTS FORTS :
      - Accès simultanés sécurisés à  l’information (en intranet ou extranet)
      - Réduction importante des temps de recherche
      - Sauvegarde de vos données essentielles en cas de sinistre par exemple, sans interruption de votre activité
      - Préservation de la mémoire de votre entreprise
      
La numérisation de dossiers techniques pour TOTAL fait partie de nos activités récurrentes. Depuis 2001, nous accompagnons le groupe dans la numérisation et la structuration de données complexes et très hétérogènes, ce qui représente des volumes de plusieurs de milliers de documents.
      
De 2010 à 2013, nous avons également accompagné la Caisse des Dépôts et Consignations dans un projet industriel ambitieux :  la numérisation d’une grande partie de son fonds de dossiers de gestion, lui permettant d’anticiper les demandes de liquidation des dossiers retraite tout en optimisant ses espaces de stockage. Au total plus de sept millions d’images traitées ! 
      
Nous accompagnons depuis notre création des services d’archives de plusieurs départements pour la numérisation de leur fonds patrimoniaux tant sous la forme de registres reliés, de cartes ou de micro formes. 
      
Avec des équipes présentes sur site et une organisation dédiée de plus de 25 personnes, nous avons pu faire la démonstration de notre capacité à accompagner de grands projets.
      
Le service Flux Documentaires de STEP, c’est 11 personnes : 6 opérateurs, 4 coordinateurs d’activités et 1 responsable de pôle à votre service. 
      `

    },

    {
      image :"/assets/svg/stack.svg",
      titre : "Une ingénierie dédiée à chaque projet de numérisation  ",
      accroche : "Un expert de la capture d’image sur des supports très variés à votre service"

    }
  ]

 
}
