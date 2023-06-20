import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { MIYAZAKI_GAMES } from '../constants/miyazaki-games';
import { MiyazakiGame } from '../interfaces/miyazaki-game';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  gameListObs$!: Observable<any>;
  gameSelectedObs$: Subject<MiyazakiGame> = new Subject()

  constructor() { }

  filterGames(input: string): Observable<MiyazakiGame[]> {
    return of(MIYAZAKI_GAMES.filter((game) => game.name.includes(input)));
  }

  selectGame(game: MiyazakiGame): void {
    this.gameSelectedObs$.next(game);
  }
}
