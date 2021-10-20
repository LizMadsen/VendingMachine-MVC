import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Snacks } from "./Models/Snacks.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  snacks = new snacks('Slappy', 83, 'https://i.ytimg.com/vi/vQ7F1Zj7KJE/maxresdefault.jpg')
  /** @type {Snacks[]} */
  snacks = new Snacks[]
  gameOver = false
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
