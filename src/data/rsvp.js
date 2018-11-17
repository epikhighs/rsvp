import {create} from 'microstates';

export class Patient {
  nameFirst = String;
  nameLast;
  nameMiddle;
}

export default class Rsvp {
  user = create(Patient);
  date = String;
}