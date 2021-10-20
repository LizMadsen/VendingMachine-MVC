import { ProxyState } from "../AppState";
import { Snacks } from "../Models/Snacks";
import { gameService } from "../Services/GameService.js"

function _draw() {
    const snacks = ProxyState.activeSnack
    document.getElementById('snacks').innerHTML = `<img class="img-fluid action rounded" src="${snacks.imgURL} alt="snack" onclick="app.GameController.vend()"> <div class="mt-3 d-flex justify-content-between"> <h3>Vending Machine</h3>}`
}

