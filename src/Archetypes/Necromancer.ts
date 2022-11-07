import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private static _instance = 0;
  private hability:EnergyType;

  constructor(name: string) {
    super(name);
    this.hability = 'mana';
    Necromancer._instance += 1;
  }

  static createdArchetypeInstances():number {
    return this._instance;
  }

  get energyType(): EnergyType {
    return this.hability;
  }
}