import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ParamJeu} from "../../modeles/paramJeu";

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss']
})
export class ParamsComponent implements OnInit {

  test!: ParamJeu;
  @Output()
  paramGame: EventEmitter<ParamJeu> = new EventEmitter<ParamJeu>();

  game!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.game = new FormGroup(
      {
        _allumettes: new FormControl(
          '50', [
            Validators.required
          ]
        ),
        _player1: new FormControl(
          'Joueur1', [
            Validators.required,
            Validators.minLength(3)
          ]
        ),
        _player2: new FormControl(
          'Joueur2', [
            Validators.required,
            Validators.minLength(3)
          ]
        ),
      }
    )
  }

  get allumettes(): AbstractControl{
    return <AbstractControl>this.game.get('_allumettes');
  }
  get player1(): AbstractControl{
    return <AbstractControl>this.game.get('_player1');
  }
  get player2(): AbstractControl{
    return <AbstractControl>this.game.get('_player2');
  }

  onSubmit() {
    this.test = new ParamJeu();
    this.test.player1 = this.player1.value;
    this.test.player2 = this.player2.value;
    this.test.nbAllumettes = this.allumettes.value;
    this.paramGame.emit(this.test);
  }
}
