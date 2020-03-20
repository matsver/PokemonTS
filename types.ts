export type EnergyType = "Normal" | "Bug" | "Dark" | "Dragon" | "Electric" | "Fairy" | "Fighting" | "Fire" | "Flying" | "Ghost" | "Grass" | "Ground" | "Ice" | "Poison" | "Psychic" | "Rock" | "Steel" | "Water";

export interface Attack {
  moveName: string;
  damage: number;
}

export interface Weakness {
  type: EnergyType;
  multiplier: number;
}

export interface Resistance {
  type: EnergyType;
  multiplier: number;
}