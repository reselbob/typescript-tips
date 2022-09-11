import {expect} from 'chai';
import {before, describe, it} from 'mocha';
import {Stooge} from '../src/types';
import {Tips} from '../src/classes';

describe('Type Tests', () => {
  before(async () => {
    // tslint:disable-next-line:no-console
    console.log('Starting Type Tests');
  });

  it('Can assign Stooge', done => {
    const stooge: Stooge = new Tips().getGeorge();
    expect(stooge).to.eq('George');
    done();
  });
});
