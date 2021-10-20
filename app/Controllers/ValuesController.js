import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";


//Public
export class ValuesController {
  constructor() {
    ProxyState.on("values", _draw);
    _draw()
  }

  addValue() {
    valuesService.addValue()
  }

  removeValue(id) {
    valuesService.removeValue(id)
  }

}
