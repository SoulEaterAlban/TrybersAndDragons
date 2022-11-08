import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    player1: Character | Fighter, 
    private monsters:Array<Monster | Fighter | SimpleFighter>,
  ) {
    super(player1);
  }

  fight(): number {
    for (let i = 0; i < this.monsters.length; i += 1) {
      while (this.player.lifePoints > 0 && this.monsters[i].lifePoints > 0) {
        this.player.attack(this.monsters[i]);
        this.monsters[i].attack(this.player);
      }
    }
    return super.fight();
  }
}