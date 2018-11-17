import chai from 'chai';
import Rsvp from '../src/data/rsvp';
import {Patient} from '../src/data/rsvp';
import {create} from 'microstates';

chai.should();

describe('Patient', () => {
  it(`should have a full name`, () => {
    const patient = create(Patient, {nameFirst: 'Homer'});
    patient.nameFull.should.equal('Homer J Simpson');
  });
});
