import {expect} from 'chai';
import {before, describe, it} from 'mocha';
import {Tips} from '../src/classes';
import {CartoonCharacter} from '../src/interfaces';

describe('Interface Tests', () => {
  before(async () => {
    // tslint:disable-next-line:no-console
    console.log('Starting Interface Tests');
  });

  it('Cannot print character', done => {
    let firstName;
    let lastName;
    const character: CartoonCharacter = {firstName, lastName};
    try {
      new Tips().printCharacter(character);
    } catch (e) {
      expect(e).to.be.an('Error');
      done();
    }
  });
});
