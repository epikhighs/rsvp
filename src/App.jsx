import 'react';
import './App.css';
import {create} from 'microstates';
import {Patient} from './data/rsvp';

console.log(create(Patient, {nameFirst: 'foo'}));

const App = ({apple}) => (
  <div className="App">
    <h1>Welcome to RSVP</h1>
    <div>{apple}</div>
    <div>{apple}</div>
    <div>{apple}</div>
  </div>
);

export default App;
