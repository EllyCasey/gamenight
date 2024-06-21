import { Gamer } from './models/Gamer.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  gamers = [
    new Gamer(
      'Ricky', 
      0, 
      'Ricky.jpg'),
    new Gamer(
      'Pippin', 
      0, 
      'Pippin.jpg'),
    new Gamer(
      'Sassafras', 
      0, 
      'Sassafras.jpg'),
    new Gamer(
      'Elly', 
      0, 
      'Elly.jpg'
    ),
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())