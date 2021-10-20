import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Snacks } from "./Models/Snacks.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  activeSnack = new Snacks('Potion', 200, 'https://i.ebayimg.com/images/g/jRoAAOSwGzhaTarb/s-l400.jpg')
  /** @type {Snacks[]} */
  snacks = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
