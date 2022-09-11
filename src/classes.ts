import {Flintstone, Jetson, Stooge} from './types';
import { CartoonCharacter } from "./interfaces";

export class Tips {
  getMoe(): Stooge {
    return 'Moe';
  }

  getGeorge(): Jetson {
    return 'George';
  }

  getWilma(): Flintstone {
    return 'Wilma';
  }

  printCharacter(character: CartoonCharacter): void {
    if (!character.firstName) throw new Error('First name is required.');
    if (!character.lastName) throw new Error('Last name is required.');
    let str = `The first name of the character is ${character.firstName}.\n`;
    str += `The last name of the character is ${character.lastName}`;

    console.log(str);
  }
}
