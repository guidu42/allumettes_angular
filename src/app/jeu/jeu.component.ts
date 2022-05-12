import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ParamJeu} from "../../modeles/paramJeu";
import {Game} from "../../modeles/game";

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss']
})
export class JeuComponent implements OnChanges {

  @Input()
  paramGame!: ParamJeu;
  game!: Game;
  allumettes: Array<{selected: boolean, rep: number}> = [];
  allumettesSelected: number = 0;
  selecting: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.allumettes = [];
    if(this.paramGame){
      if(!this.game) {
        for (let i = 0; i < this.paramGame.nbAllumettes; i++) {
          this.allumettes.push({selected: false,rep :0});
        }
      }
      this.game = new Game(this.paramGame);
    }
  }


  isSelected(index: number):void {
    if(this.selecting && (this.allumettesSelected < 3 || this.allumettes[index].selected ) && this.allumettes[index].rep == 0) {
      this.allumettes[index].selected = !this.allumettes[index].selected;
      this.allumettes[index].rep = 1;
      this.allumettesSelected = this.allumettes.filter(allum => allum.selected == true).length;
    }
  }

  destroySelected(): void{
    this.game.lessAllumettes(this.allumettesSelected);
    let allumettesClicked = document.querySelectorAll('.is-selected');
    for(let i=0; i<allumettesClicked.length; i++){
      allumettesClicked[i].classList.add('destroyed');
    }
    this.allumettes = this.allumettes.filter(allum => allum.selected == false);

    this.allumettesSelected = 0;
  }

  startSelection(i: number) {
    this.selecting = true;
    for(let i = 0; i<this.allumettes.length; i++){
      this.allumettes[i].rep = 0;
    }
    this.isSelected(i);
  }

  endSelection(i: number) {
    this.isSelected(i);
    this.selecting = false;
  }
}
