import React, { Component } from 'react';
import './App.css';
import Prog from './Components/prog';
import Loc from './Components/loc';
import Stat from './Components/stat';

import ss from './img/sousse.PNG';
import sf from './img/sfax.PNG';
import tu from './img/tunis.PNG';


const sousse={pic:ss, locname:"SOUSSE"};
const sfax={pic:sf, locname:"SFAX"};
const tunis={pic:tu, locname:"TUNIS"};
const GroupLoc =[sousse, sfax, tunis];

const full={titre:"FULL TIME PROGRAM", desc:"un programme intensif de 3 mois pour devenir développeur fullstack js ou java. Un coaching technique et professionnel régulier et des liens très forts avec le monde de l'entreprise.", savoir:"En savoir plus", bgcolor:"#DAECF3", txtcolor:"#7CA9BA", titrecol:"#878787", desccol:"#878787"};
const part={titre:"PART TIME PROGRAM", desc:"Tu peux développer ton produit technologique pendant l'année scolaire si tu es étudiant ou en parallèle de ton travail si tu es un professionnel. Ça se passe tous les weekends (demi-journée Samedi ou dimanche) dans notre Hackerspace !", savoir:"En savoir plus", bgcolor:"#FE424D", txtcolor:"#FE424D", titrecol:"#FFFFFF", desccol:"#FFFFFF"};
const kids={titre:"KIDS CODING PROGRAM", desc:"Ce programme vise à initier les plus jeunes (8-12 ans) à l'informatique et à la programmation sur 4 niveaux. Un niveau dure 2 mois. À la fin du programme, l'enfant doit présenter son projet au PDG d'une entreprise technologique.", savoir:"En savoir plus", bgcolor:"#1AA6B7", txtcolor:"#1AA6B7", titrecol:"#FFFFFF", desccol:"#FFFFFF"};
const summer={titre:"SUMMER ACADEMY", desc:"Développe ton produit technologique pendant 3 semaines pendant l'été. Un expérience très riche d'apprentissage et de rencontres avec des passionnés de la technologie.", savoir:"En savoir plus", bgcolor:"#022D41", txtcolor:"#022D41", titrecol:"#FFFFFF", desccol:"#FFFFFF"};
const GroupProg =[full, part, kids, summer];

const one={nbr:"+20,000", text:"PASSIONNÉS DU DIGITAL"};
const two={nbr:"+500", text:"ÉTUDIANTS DEPUIS LE DÉMARRAGE EN AOÛT 2016"};
const three={nbr:"+300", text:"PRODUITS DÉVELOPPÉS"};
const four={nbr:"+30", text:"INSTRUCTEURS GAME, WEB ET MOBILE"};
const five={nbr:"+50", text:"SPEAKERS"};
const six={nbr:"400m²", text:"DE HACKERSPACE AU COEUR DU LAC 1"};
const GroupStat =[one, two, three, four, five, six];

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NOS PROGRAMMES</h1>
        </header>
      <div>
        <div className="program">
          {GroupProg.map((el,i)=>{
          return <Prog titre={el.titre} desc={el.desc} savoir={el.savoir} bgcolor={el.bgcolor} txtcolor={el.txtcolor} titrecol={el.titrecol} desccol={el.desccol}/> })}
        </div>

        <div className="statistics">
          <h1 className="titreSTAT">QUELQUES CHIFFRES</h1>
          <div className="statistic">
            {GroupStat.map((el,i)=>{
            return <h2><Stat nbr={el.nbr} text={el.text}/></h2> })}
          </div>
        </div>  
      </div>

      <div className="localisation">
        <h2 className="ousepasse">OU SE PASSENT LES SESSIONS ?</h2>
        <h4 className="ousepasse2">Les sessions se passent dans les Hackerspaces de GoMyCode dans les villes suivantes: l'hébergement est possible dans la limite des places disponibles.</h4>
        <div className="local">
          {GroupLoc.map((el,i)=>{
          return <Loc pic={el.pic} locname={el.locname}/> })} 
        </div> 
      </div>
      </div>
    );
  }
}

export default App;
