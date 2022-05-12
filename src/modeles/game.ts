import {ParamJeu} from "./paramJeu";

export class Game{

  _nballumettes: number;
  _joueur1: string;
  _joueur2: string;
  _currentPlayer: string;
  _winner: string;

  constructor(paramJeu: ParamJeu) {
    this._nballumettes = paramJeu.nbAllumettes;
    this._joueur1 = paramJeu.player1;
    this._joueur2 = paramJeu.player2;
    this._currentPlayer = this._joueur1;
    this._winner = '';
  }

  lessAllumettes(number: number): void{
    this._nballumettes -= number;
    this.changeCurrentPlayer();
    this.checkVictory();
  }

  changeCurrentPlayer(): void{
    if(this._currentPlayer == this._joueur1){
      this._currentPlayer = this._joueur2;
    }else{
      this._currentPlayer = this._joueur1;
    }
  }

  checkVictory(): void{
    if(this._nballumettes<=0){
      this._winner = this._currentPlayer;
    }
  }

  get currentPlayer(): string{
    return this._currentPlayer;
  }

  get winner(): string{
    return this._winner;
  }

  get nbAllumettes(): number{
    return this._nballumettes;
  }
}
