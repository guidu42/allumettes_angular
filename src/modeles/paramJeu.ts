export class ParamJeu {
  private _nbAllumettes: number;
  private _player1: string;
  private _player2: string;

  constructor() {
    this._player1 = 'Joueur1';
    this._nbAllumettes = 50;
    this._player2 = 'Joueur2';
  }


  get nbAllumettes(): number {
    return this._nbAllumettes;
  }

  get player1(): string {
    return this._player1;
  }

  get player2(): string {
    return this._player2;
  }


  set nbAllumettes(value: number) {
    this._nbAllumettes = value;
  }

  set player1(value: string) {
    this._player1 = value;
  }

  set player2(value: string) {
    this._player2 = value;
  }
}
