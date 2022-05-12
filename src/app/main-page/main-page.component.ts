import { Component } from '@angular/core';
import {ParamJeu} from "../../modeles/paramJeu";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent{

  paramJeu!: ParamJeu;
  newGame: boolean = false;
  loadParam(paramJeu: ParamJeu): void{
    this.paramJeu = paramJeu;
    this.newGame = true;
  }

}
