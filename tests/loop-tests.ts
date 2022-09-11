//import {expect} from 'chai';
import {before, describe, it} from 'mocha';
import {MoreTips} from '../src/classes';

describe('Loop Tests', () => {
  before(async () => {
    // tslint:disable-next-line:no-console
    console.log('Starting Loop Tests');
  });

  it('Can loop', done => {
    const phrase = 'Hi There';
    new MoreTips().forLoop(phrase);
    done();
  });
});
