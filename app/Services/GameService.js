import { ProxyState } from "../AppState";
import { Snacks } from "../Models/Snacks";


class GameService {
    vend(activeSnack) {
        let snack = new Snacks(activeSnack.name, activeSnack.price, activeSnack.imgURL)
        ProxyState.activeSnack = [...ProxyState.activeSnack, snack]
    }
}

export const gameService = new GameService()